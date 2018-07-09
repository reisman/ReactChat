const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3002 });
const users = [];
const broadcast = (data, ws) => {
    server.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN && client !== ws) {
            client.send(JSON.stringify(data));
        }
    });
};

server.on('connection', (ws) => {
    let index;
    ws.on('message', (message) => {
        const data = JSON.parse(message);
        switch (data.type) {
            case 'ADD_USER': {
                index = users.length;
                users.push({name: data.name, id: index + 1});
                ws.send(JSON.stringify({
                    type: 'LIST_USERS',
                    users
                }));
                broadcast({
                    type: 'LIST_USERS',
                    users
                }, ws);
                break;
            }
            case 'ADD_MESSAGE': {
                broadcast({
                    type: data.type,
                    message: data.message,
                    author: data.author,
                }, ws);
                break;
            }
            default:
                break;
        }
    });

    ws.on('close', () => {
        users.splice(index, 1);
        broadcast({
            type: 'LIST_USERS',
            users
        }, ws);
    });
});
