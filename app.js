const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello from AlgoRun');
});

app.listen(port, () => console.log(`Listening on PORT : ${port}`));