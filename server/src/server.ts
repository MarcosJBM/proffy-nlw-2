import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    const users = [
        { name: "Marcos", age: 18 },
        { name: "Daniel", age: 18 }
    ];

    return response.json(users);
});

app.listen(3333);