const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const galleryRouter = require('./routers/gallery-router');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/gallery', galleryRouter);

const port = 5000;
app.listen(port, function(){
    console.log('listening on port', port);
});

