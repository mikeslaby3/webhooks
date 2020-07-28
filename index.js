'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express().use(bodyParser.json());
const PORT = 3000;

app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

app.post('/captainhook', (req, res) => {
    console.log(req.body);
    res.status(200).end();
});