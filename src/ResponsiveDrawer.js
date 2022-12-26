import * as React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FullWidthGrid from './boxLayout';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import HomeIcon from '@mui/icons-material/Home';
import SpeedIcon from '@mui/icons-material/Speed';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PersonIcon from '@mui/icons-material/Person';
import ScienceIcon from '@mui/icons-material/Science';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {Header} from './HomePageComp';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';




const drawerWidth = 240;

export const ResponsiveDrawer= (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const icon=[<HomeIcon/>,<AccountTreeIcon/>,<SpeedIcon/>,<ScienceIcon/>,<NotificationsActiveIcon/>,<NotificationsActiveIcon/>,<PersonIcon/>];
  const [mode,setMode]=useState(true);
  
  const darkTheme = createTheme({
    palette: {
      mode: (mode? 'light':'dark'),
      primary: {
        main: '#fff',
      },
    },
  });
  
  const setViewMode=()=>{
    setMode(!mode);
  }
  
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Typography >
        <br/>
        <b style={{fontSize:'14px'}}>DE-SUUNG NATIONAL <br/>SERVICE WATER PROJECT</b>
        <br/><br/>
        <p style={{color:'grey', fontSize:'10px'}}>Gyelpozhing Integrated Water Supply Pilot Project</p>
        <br/>
      </Typography>
      <Divider />
      <List>
        
        {['Home', 'SCADA Display', 'Valve Controller', 'Water Flow Display','Alarms and Events', 'Event Log', 'Account'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {icon[index]}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
        <IconButton sx={{ ml: 1, marginTop:'30vh',alignItems:'center',alignContent:'center' }} onClick={setViewMode} color="inherit">
        {mode? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
<ThemeProvider theme={darkTheme}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline /> 
      <AppBar
        
        position="fixed"
        sx={{
            
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          }}
      >
        <Toolbar  style={{height:'15vh', justifyContent:'center'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }
             }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h3" noWrap component="div"> */}
            <Header/>
          {/* </Typography> */}
          
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <br/><br/><br/>
        <FullWidthGrid/>
        
      </Box>
    </Box>
</ThemeProvider>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;