import * as React from 'react';
import { Drawer, Button, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Typography } from '@mui/material/';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import HomeIcon from '@mui/icons-material/Home';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export default function SideMenu() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <List sx={{mt:'10vh', mb:'1vh'}}>
            <Typography sx={{textAlign: 'center', fontSize:'2rem'}}>The King's Restaurant</Typography>
            {['Dashboard', 'FAQ Page'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton sx={{mt:'1vh'}}>
                  <ListItemIcon sx={{display: 'flex', justifyContent: 'right'}}>
                    {index % 2 === 0 ? <HomeIcon /> : <HelpOutlineIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{textAlign: 'center'}} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      );

  return (
    <>
        <Button onClick={toggleDrawer(true)}>Account Info&nbsp;<ArrowCircleRightRoundedIcon /></Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
        </Drawer>
    </>
  );
}
