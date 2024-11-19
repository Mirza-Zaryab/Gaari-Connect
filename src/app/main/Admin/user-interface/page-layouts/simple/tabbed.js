import DemoContent from '@fuse/core/DemoContent';
import { styled } from '@mui/material/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useState } from 'react';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Link from '@mui/material/Link';



const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {},
  '& .FusePageSimple-toolbar': {},
  '& .FusePageSimple-content': {},
  '& .FusePageSimple-sidebarHeader': {},
  '& .FusePageSimple-sidebarContent': {},
}));

function SimpleTabbedSample() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, value) => {
    setSelectedTab(value);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
 


  return (
    <Root
      header={
        <div className="p-24">
          <div className="flex">
          <h1 style={{marginTop:"30px"}}><b>Gadi Connect</b></h1> 
          <h3  style={{marginLeft:"50px",marginTop:"35px"}}>How It Work</h3>
          <div style={{marginLeft:"25px",marginTop:"5px"}}>

          <div style={{marginLeft:"25px",marginTop:"20px"}}>
            
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color="secondary"
        variant="contained"
      >
        Dashboard
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>

           
          </div>
        
          <div style={{marginLeft:"570px",marginTop:"20px"}} className="flex">
        
           <Link  style={{marginTop:"10px",marginRight:"10px"}} href="/Login">Login</Link>
            
         <div>
            <Button  variant="contained" color="secondary">Secondary</Button>
            </div>
            </div> 
          
           </div>
           </div>
       
      }
      contentToolbar={
        <div className="w-full px-16 sm:px-24">
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons={false}
            className="w-full h-64 border-b-1"
          >
            <Tab className="h-64" label="Item One" />
            <Tab className="h-64" label="Item Two" />
            <Tab className="h-64" label="Item Three" />
            <Tab className="h-64" label="Item Four" />
            <Tab className="h-64" label="Item Five" />
            <Tab className="h-64" label="Item Six" />
            <Tab className="h-64" label="Item Seven" />
          </Tabs>
        </div>
      }
      content={
        <div className="p-24">
          {selectedTab === 0 && (
            <div>
              <h3 className="mb-16">Item One</h3>
              <DemoContent />
            </div>
          )}
          {selectedTab === 1 && (
            <div>
              <h3 className="mb-16">Item Two</h3>
              <DemoContent />
            </div>
          )}
          {selectedTab === 2 && (
            <div>
              <h3 className="mb-16">Item Three</h3>
              <DemoContent />
            </div>
          )}
          {selectedTab === 3 && (
            <div>
              <h3 className="mb-16">Item Four</h3>
              <DemoContent />
            </div>
          )}
          {selectedTab === 4 && (
            <div>
              <h3 className="mb-16">Item Five</h3>
              <DemoContent />
            </div>
          )}
          {selectedTab === 5 && (
            <div>
              <h3 className="mb-16">Item Six</h3>
              <DemoContent />
            </div>
          )}
          {selectedTab === 6 && (
            <div>
              <h3 className="mb-16">Item Seven</h3>
              <DemoContent />
            </div>
          )}
        </div>
      }
    />
  );
}

export default SimpleTabbedSample;
