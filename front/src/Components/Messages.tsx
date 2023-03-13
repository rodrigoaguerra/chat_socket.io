import * as React from 'react';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useSelector } from "react-redux";

interface User {
    id: number;
    name: string;
    status: string;
    avatar: string;
}
  
interface Message {
    msg: string;
    user: User;
}

export default function Messages() {
  
  const messages: Message = useSelector(state => state.messages);

  return (
    <Paper square sx={{ pb: '10px', pt: '65px', width:"100%", height: `calc(100% - 65px)`, overflow:'auto'}}>
        <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
        Global
        </Typography>
        <List sx={{ mb: 2 }}>
        {messages.map((item, index) => (
        <>
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar alt="Profile Picture" src={item.user.avatar} />
            </ListItemAvatar>
            <ListItemText primary={item.user.name} secondary={item.msg} />
          </ListItem>
          <Divider component="li" />
        </>
       ))}
        </List>
    </Paper>
  );
}