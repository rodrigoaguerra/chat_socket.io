import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';

export default function Message(props) {
    const { socket } = props;
    
    const [message, setMessage ] = React.useState('');
    
    socket.on('chat message', (data) => {
        setMessage(data);
        console.log(`Nova mensagem recebida: ${data}`);
    });  

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 400,
        bgcolor: 'background.paper',
        color: '#000'
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemAvatar>
            <Avatar>
                <BeachAccessIcon />
            </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Usuário" secondary={message} />
       </ListItem>
      <Divider component="li" />
    </List>
  );
}