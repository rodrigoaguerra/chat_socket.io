import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import AppBar from '../Components/AppBar.tsx';
import Contacts from '../Components/Contacts.tsx';
import Messages from '../Components/Messages.tsx';
import InputAppBar from '../Components/InputAppBar.tsx';

const mdTheme = createTheme();

export default function Dashboard(props) {
  const { socket } = props;
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <CssBaseline />
        <AppBar />
        <Contacts />
        <Messages  socket={socket} />
        <InputAppBar socket={socket} />
      </Box>
    </ThemeProvider>
  );
}