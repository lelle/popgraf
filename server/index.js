import http, { Server } from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import socket from './socket';
import EventEmitter from 'events';

const port = process.env.PORT || 3300;

const app = express();
const server = http.Server(app);

app.set('ipaddr', '127.0.0.1');
app.set('port', port);

const events = new EventEmitter();

socket(server, events);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('public'));

routes(app, events);


server.listen(port);

console.log('Server started on port: ' + port);
