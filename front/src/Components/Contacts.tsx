import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useSelector } from "react-redux";

export default function Contacts() {
  
  const users = useSelector(state => state.users);

  const socket_ids = Object.keys(users);

  return (
    <List sx={{ mt: '65px', border: "2px solid #f00", width: '100%', maxWidth: 360, height: `calc(100% - 65px)`, overflow:'auto', bgcolor: 'background.paper' }}>
      {socket_ids.map((socket_id) => {
        const user = users[socket_id];
        return (
          <>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src={user.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={user.name}
              secondary={
                <React.Fragment>
                  {user.status}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          </>);
      })}
    </List>
  );
}