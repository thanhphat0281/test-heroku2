// const path = require("path");
// const express = require("express");
// const app = express();
// app.use(express.static(__dirname + '/angular-build'));
// app.get('/*', function(req,res){
// res.sendFile(path.join(__dirname, 'angular-build', 'index.html'))
// });

// app.listen(process.env.PORT || 8080);

    //Install express server
    const express = require('express');
    const path = require('path');

    const app = express();

    // Serve only the static files form the dist directory
    app.use(express.static(__dirname + '/dist/angular-app'));

    app.get('/*', function(req,res) {
        
    res.sendFile(path.join(__dirname+'/dist/angular-app/index.html'));
    });

    // Start the app by listening on the default Heroku port
    app.listen(process.env.PORT || 8080);

