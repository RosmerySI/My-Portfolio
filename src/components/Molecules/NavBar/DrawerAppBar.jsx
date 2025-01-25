import React from "react";
import {
  AppBar, Box, Button, CssBaseline, Divider, Drawer, IconButton, List, ListItem,
  ListItemButton, ListItemText, Toolbar, Typography
} from "@mui/material";
import PropTypes from "prop-types";
import { Menu } from "@mui/icons-material";
import { useNavigate } from "react-router";


const drawerWidth = 240;

const navItems = [
  { id: 1, course: "world", title: "My World" },
  { id: 2, course: "experience", title: "My Experience" },
  { id: 3, course: "contact", title: "Contact me" },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

 

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Rosmery Salazar
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => navigate(`/${item.course}`)}
            >
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
   
    <Box sx={{ width: "100%", height: "6vh", position: "relative", overflow: "hidden" }}>
      <CssBaseline /> 
     
      <AppBar
        sx={{
          position: "relative",
          backgroundColor: "#c1c1c1",          
          color: "white",
          zIndex: 1,
        }}
        component="nav"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <Menu />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Rosmery Salazar Irarragorri
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                sx={{ color: "white" }}
                onClick={() => navigate(`/${item.course}`)}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
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
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar; 