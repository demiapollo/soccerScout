// SearchTabs.js

import React from 'react';
import { Tabs, Tab, Popover } from '@material-ui/core';

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
            <Tabs value={value} onChange={handleTabChange} aria-label="simple tabs example">
                <Tab label="Players" />
                <Tab label="Teams" />
                <Tab label="Leagues" />
            </Tabs>
        </Popover>
    );
};

export default SearchTabs;
