import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(() => ({
    marginLeft: '360px',
    width: `calc(100% - 360px)`,
  }));


export default function InputAppBar(props) {
  const { socket } = props;
  const [message, setMessage ] = React.useState('');

  const handleChange = (event) => {
      // 👇 Get input value from "event"
      setMessage(event.target.value);
  };

  const sendMessage = () => {
      // envia a mensagem
      socket.emit('chat message', message);
      // limpa o campo de mensagem
      setMessage('');
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      sendMessage();
  };

  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }} >
      <Toolbar>
      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
        >
        <IconButton sx={{ p: '10px' }} aria-label="menu">
            <MenuIcon />
        </IconButton>
        <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Send your message"
            inputProps={{ 'aria-label': 'Send your message' }}
            value={message}
            onChange={handleChange}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton type="submit" color="primary" sx={{ p: '10px' }} aria-label="directions">
            <DirectionsIcon />
        </IconButton>
        </Paper>
      </Toolbar>
    </AppBar> 
  );
}
