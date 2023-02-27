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

io.on('connection', function(socket) {
  console.log('Usuário conectado');

  socket.on('disconnect', function() {
    console.log('Usuário desconectado');
  });

  socket.on('chat message', function(msg) {
    console.log('Mensagem recebida: ' + msg);
    io.emit('chat message', msg);
  });
});

server.listen(5000, function() {
  console.log('Servidor iniciado na porta 5000');
});
