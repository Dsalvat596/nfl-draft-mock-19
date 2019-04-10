const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose');

    const prospectRoute = require('./routes/prospect.route');

    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/NflDraft19', { useNewUrlParser: true}).then(
      ()=> {console.log('Database is connected')},
      err=> {console.log('can not connect to the database')}  
    );

    const app = express();
    app.use(bodyParser.json());
    app.use(cors);
    app.use('/prospects', prospectRoute);
    let port = 4000;

    const server = app.listen(port, function(){
        console.log('Listening on port ' + port);
    });