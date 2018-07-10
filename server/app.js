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
    const buildUsersMessage = () => JSON.stringify({
        type: 'LIST_USERS',
        users,
    });

    let index;
    ws.on('message', (message) => {
        const data = JSON.parse(message);
        switch (data.type) {
            case 'ADD_USER': {
                index = users.length;
                users.push({ name: data.name, id: index + 1 });
                const usersMessage = buildUsersMessage();
                ws.send(usersMessage);
                broadcast(usersMessage, ws);
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
        const usersMessage = buildUsersMessage();
        broadcast(usersMessage, ws);
    });
});
