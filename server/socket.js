import socketio from 'socket.io';

export default (server, events, store) => {
  console.log('socket.io');

  const io = socketio(server);

  io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('add', (sequence) => {
      events.emit('add', sequence);
    });

    socket.on('get', (id) => {
      socket.emit('updated', store.reduceSequence(id));
    });
  });    

  console.log('socket.io initialized');

  function updated(sequence) {
    io.emit('updated', sequence);
  }

  return {
    updated
  };
};
