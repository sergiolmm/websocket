
const express = require('express')
const app = express()
const port = process.env.PORT || '3000'




app.get('/oi', (req, res) => {
  res.send('Hello World!')
})


app.get('/', function(req, res, next) {
  res.json({message: 'alive'});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


/*
const express = require('express')

var webserver = express()

webserver.use((req, res) =>
   res.sendFile('/websocket-client.html', { root: __dirname })
 )


 //.listen(80, () => console.log(`Listening on ${80}`))
 
 app.get('/oi', (req, res) => {
   res.send('Hello World!')
 })


 var port = normalizePort(process.env.PORT || '3000');
 webserver.set('port', port);

var server = http.createServer(webserver);

server.listen(port);


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




 const { WebSocketServer } = require('ws')

 const sockserver = new WebSocketServer({ port: 443 })

 sockserver.on('connection', ws => {
 console.log('New client connected!')
 ws.send('connection established')
 ws.on('close', () => console.log('Client has disconnected!'))
 ws.on('message', data => {
   sockserver.clients.forEach(client => {
     console.log(`distributing message: ${data}`)
     client.send(`${data}`)
   })
 })

 ws.onerror = function () {
   console.log('websocket error')
 }
}
)
*/