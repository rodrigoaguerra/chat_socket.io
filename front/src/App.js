// import logo from './logo.svg';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import SignUp from './Components/SignUp.tsx';
import AppBar from './Components/AppBar.tsx';
import Contacts from './Components/Contacts.tsx';
import Messages from './Components/Messages.tsx';
import InputAppBar from './Components/InputAppBar.tsx';
import socket from './socket';
import { useSelector } from 'react-redux';

const theme = createTheme();

function App() {
  // verificar se existe um usuário
  const user = useSelector(state => state.user);
  
  if(!user) return <SignUp socket={socket} />;
   
  // se ele existir acessar o chat
  return (
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex', height: '100vh' }}>
          <CssBaseline />
          <AppBar  />
          <Contacts />
          <Messages />
          <InputAppBar socket={socket} />
        </Box>
      </ThemeProvider>
  );
}

export default App;
