// SearchTabs.js

import React from 'react';
import { Tabs, Tab, Popover, Box } from '@material-ui/core';

const SearchTabs = ({ filterOpen, handleFilterClose, filterAnchorEl, handleTabChange, value }) => {
    const id = filterOpen ? 'simple-popover' : undefined;
  
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
            <Box style={{ minWidth: 150 }}>  {/* You may need to adjust minWidth based on your needs */}
              <Tabs 
                value={value} 
                onChange={handleTabChange} 
                aria-label="simple tabs example"
                orientation="vertical"
              >
                  <Tab label="Players" />
                  <Tab label="Teams" />
                  <Tab label="Leagues" />
              </Tabs>
            </Box>
        </Popover>
    );
};

export default SearchTabs;
