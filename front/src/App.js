import logo from './logo.svg';
import io from 'socket.io-client';
import './App.css';
import Input from  './Components/Input.tsx';
import Message from './Components/Message.tsx';

function App() {
  const socket = io('http://localhost:5000'); 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Message socket={socket} />
        <div>
          <Input socket={socket} />
        </div>
      </header>
    </div>
  );
}

export default App;
