const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.set('port', port);
app.use(express.static(path.join(__dirname, './public')));

app.get('*', (req, res) => {
    console.log('Serving ', req.url);
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => console.log('Listening on port', port));