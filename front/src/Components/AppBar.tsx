import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import MoreIcon from '@mui/icons-material/MoreVert';
import Tooltip from '@mui/material/Tooltip';
import { useSelector } from "react-redux";

export default function InputAppBar() {
  
   const user = useSelector(state => state.user);

  return (
    <MuiAppBar position="fixed" >
        <Toolbar
        sx={{
            pr: '24px', // keep right padding when drawer closed
        }}
        > 
            <Tooltip title="Open settings">
                <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={user.avatar} />
                </IconButton>
            </Tooltip>
            <Typography
                component="p"
                color="inherit"
                >
                {user.name}
            </Typography>
            <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
            >
            Chat Socket.io
            </Typography>
            <IconButton size="large" aria-label="search" color="inherit">
                <SearchIcon />
            </IconButton>
            <IconButton
                size="large"
                aria-label="display more actions"
                edge="end"
                color="inherit"
            >
                <MoreIcon />
            </IconButton>
        </Toolbar>
    </MuiAppBar>
  );
}
