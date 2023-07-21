// SearchTabs.js

import React from 'react';
import { Tabs, Tab, Popover, Box } from '@material-ui/core';

const SearchTabs = ({ filterOpen, handleFilterClose, filterAnchorEl, handleTabChange, value }) => {
    const id = filterOpen ? 'simple-popover' : undefined;
    const countryTabs = ["Argentina", "Brazil", "England", "France", "Germany", "Italy", "Spain", "United States"];
  
    return (
        <Popover
            id={id}
            open={filterOpen}
            anchorEl={filterAnchorEl}
            onClose={handleFilterClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
        >
            <Box style={{ minWidth: 150 }}>  
              <Tabs 
                value={value} 
                onChange={handleTabChange} 
                aria-label="Country tabs" 
                orientation="vertical"
              >
                  {countryTabs.map((country, index) => (
                      <Tab key={index} label={country} />
                  ))}
              </Tabs>
            </Box>
        </Popover>
    );
};

export default SearchTabs;
