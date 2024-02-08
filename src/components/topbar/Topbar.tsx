import './Topbar.scss'
import { Grid, Box } from '@mui/material'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { useState } from 'react'
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Menus from '../menu/Menus';
import { motion } from 'framer-motion';
import Sidebar from '../menu/Sidebar';

function Topbar() {
  const [menuOpen, setMenuOpen]=useState(false)

  const toggleDrawer =
  ( open: boolean) =>
 {    setMenuOpen(open);
  };

  return (
    <Grid className={`topbar ${menuOpen?"active":""}`}>
      <Grid className='wrapper'>
        <Grid className='left'>
          <motion.div 
          initial={{opacity:0, scale:0.5}}
          animate={{opacity:1, scale:1}}
          transition={{duration:1}}>
          <a href="#intro" className='logo'><img src="../../src/assets/banner.png" width='auto' height="80px" alt="logo" /></a>
          </motion.div>
        </Grid>
        <Grid className='midle'>
        <Box className="itemContainer">
            <PhoneIphoneIcon />
            <p>
              +30 697 2034 969
            </p>
          </Box>
          <Box className="itemContainer">
            <MailOutlineIcon/>
            <p>
              support@drweblab.gr
            </p>
          </Box>
        </Grid>
        <Grid>
          <Sidebar/>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Topbar