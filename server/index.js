const express = require('express');
const app = express();
const cors = require('cors');
const server = require('http').Server(app);
const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

// permite todas as origens (não é recomendado para produção)
// app.use(cors());

// permite somente a origem específica
app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.static(__dirname + '/public'));

// recivied users
const users = {};

io.on('connection', function(socket) {
  console.log('Usuário conectado :', socket.id);

  // Quando o usuário se conecta, salve os dados do usuário na variável "users"
  socket.on('setUserData', (userData) => {
    users[socket.id] = userData;
    console.log(users);
    // Enviar a lista de usuários para todos os clientes quando um novo cliente se conectar
    io.emit('users', users);
  })

  // Quando o usuário se desconecta, remove os dados dele do objeto "users"
  socket.on('disconnect', function() {
    delete users[socket.id];
    console.log('Usuário desconectado :', socket.id);
    // Enviar a lista de usuários para todos os clientes quando um cliente se desconectar
    io.emit('users', users);
  });
  
  // evento de envio de mensagens
  socket.on('chat message', function(msg) {
    const user = users[socket.id];
    console.log('user is:', user);
    console.log('Mensagem recebida: ' + msg);
    io.emit('chat message', {user, msg});
  });
});

server.listen(5000, function() {
  console.log('Servidor iniciado na porta 5000');
});
