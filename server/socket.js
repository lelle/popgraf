import socketio from 'socket.io';

export default (server) => {
  console.log('socket.io');

  const io = socketio(server);

  io.on('connection', (socket) => {
    console.log('a user connected');
  });    

  console.log('socket.io initialized');
};
