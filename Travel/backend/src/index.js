import cors from 'cors';
import express from 'express';
import http from 'http';
import db from './database/db.js';
import cookieParse from 'cookie-parser';
import useRoute from './router/userRouter.js';

//middleware
const app = express();
app.use(cookieParse());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(useRoute);

function normalizePort(val) {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }
  

const port = normalizePort(process.env.PORT || 5000);
app.set('port', port);

const server = http.createServer(app);

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    debug('Listening on ' + bind);
  }  

function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
  
  //   // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

db.on('open', function() {
    server.listen(port);
    server.on('error', onError);
    server.on('listener', onListening);
})

