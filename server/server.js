const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('server/public'));

const galleryRouter = require('./routers/gallery-router');

app.use('/gallery', galleryRouter);

let port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log('up and running on port', port);
});

