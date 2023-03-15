const express = require('express');
const bodyParse = require('body-parser');
const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParse.json());

const posts = [];

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;
    posts[id] = title;
    res.status(201).send();
});

app.listen(4000, () => {
    console.log("app up 4000 port");
});