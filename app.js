const ws = new require("ws");
const wsServer = new ws.Server({ port: 5000 });


const clients = [];

wsServer.on("connection", (newClient) => {
  clients.push(newClient)
  newClient.on('message', (data) => {
    const message = JSON.parse(data)
    console.log(message);
    clients.forEach(client => {
      if (client !== newClient) {
        client.send(JSON.stringify(message))
      }
    });
  })
    // console.log('New on frontend');
    // setTimeout(() => {
    //     newClient.send('its me')
    // }, 3000);
    clients.forEach(client => {
        if (client !== newClient) {
          client.send('its new client')
      }  
    })
});
