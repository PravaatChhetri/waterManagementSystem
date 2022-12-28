import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FullWidthGrid from "./HomePage";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import HomeIcon from "@mui/icons-material/Home";
import SpeedIcon from "@mui/icons-material/Speed";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PersonIcon from "@mui/icons-material/Person";
import ScienceIcon from "@mui/icons-material/Science";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Header } from "./HomePageComp";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const drawerWidth = 280;

export const ResponsiveDrawer = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  //array of Icons used in the side-nav-bar
  const icon = [
    <HomeIcon />,
    <AccountTreeIcon />,
    <SpeedIcon />,
    <ScienceIcon />,
    <NotificationsActiveIcon />,
    <NotificationsActiveIcon />,
    <PersonIcon />,
  ];
//state used for changing light and dark mode
  const [mode, setMode] = useState(true);

  //defining the dark and light mode theme
  const darkTheme = createTheme({
    palette: {
      mode: mode ? "light" : "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  const setViewMode = () => {
    setMode(!mode);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
//Items in side-nav-bar
  const drawer = (
    <div>
      <List>
        <ListItem>
          <ListItemText>
            <Typography
              disablePadding
              style={{ marginTop: "5px", textAlign: "center" }}
            >
              <b style={{ fontSize: "14px" }}>
                DE-SUUNG NATIONAL <br />
                SERVICE WATER PROJECT
              </b>
              <br />
              <br />
              <p style={{ color: "grey", fontSize: "10px" }}>
                Gyelpozhing Integrated Water Supply Pilot Project
              </p>
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List>
        {[
          "Home",
          "SCADA Display",
          "Valve Controller",
          "Water Flow Display",
          "Alarms and Events",
          "Event Log",
          "Account",
        ].map((text, index) => (
          <ListItem key={text}>
            <ListItemButton>
              <ListItemIcon>{icon[index]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        <ListItem>
          <ListItemButton>
            <IconButton
              sx={{ ml:10, mt:15 }}
              onClick={setViewMode}
              color="inherit"
            >
              {mode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar style={{ height: "15vh", justifyContent: "center" }}>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Header />
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
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            mt:16,
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >

          <FullWidthGrid />
        
        
        </Box>
      </Box>
    </ThemeProvider>
  );
};


export default ResponsiveDrawer;
