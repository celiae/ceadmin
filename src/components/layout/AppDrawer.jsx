import * as React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { SiHomebridge } from "react-icons/si";
import { TfiPackage } from "react-icons/tfi";
import { TbInfoCircle } from "react-icons/tb";
import { BsPersonCircle } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { FaAccusoft, FaRegChartBar } from "react-icons/fa";
import { GiEdgedShield, GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAll } from "../../app/userSlice";

const drawerWidth = 240;

const title = "celiae.github.io";

function ResponsiveDrawer(props) {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const user = useSelector(selectAll);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const upperNav = [
    { name: "Home", href: `/${user.username}`, icon: <SiHomebridge /> },
    { name: "Goods", href: `/${user.username}/goods`, icon: <TfiPackage /> },
    { name: "Log", href: `/${user.username}/log`, icon: <TbInfoCircle /> },
    { name: "Chart", href: `/${user.username}/chart`, icon: <FaRegChartBar /> },
  ];
  const lowerNav = [
    {
      name: "Personal",
      href: `/${user.username}/personal`,
      icon: <BsPersonCircle />,
    },
    { name: "Admin", href: `/${user.username}/admin`, icon: <GiEdgedShield /> },
    {
      name: "Settings",
      href: `/${user.username}/setting`,
      icon: <IoSettings />,
    },
  ];
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {upperNav.map((nav, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              onClick={() => {
                navigate(nav.href);
              }}
            >
              <ListItemIcon>{nav.icon}</ListItemIcon>
              <ListItemText primary={nav.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {lowerNav.map((nav, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              onClick={() => {
                navigate(nav.href);
              }}
            >
              <ListItemIcon>{nav.icon}</ListItemIcon>
              <ListItemText primary={nav.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <GiHamburgerMenu />
          </IconButton>
          <IconButton color="inherit">
            <FaAccusoft />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
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
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
  children: PropTypes.node,
};

export default ResponsiveDrawer;
