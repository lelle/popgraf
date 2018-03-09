import http, { Server } from 'http';
import socketio from 'socket.io';

export default (app) => {
  console.log('socket.io');

  var server = http.Server(app);
  var io = socketio(server);

  io.on('connection', function(socket){
    console.log('a user connected');
  });    

  console.log('socket.io initialized');
};
