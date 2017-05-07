const express = require('express');
const path = require('path');
var app = express();
app.set("port", process.env.PORT  || 5000);

app.use(express.static(__dirname + '/dist'));

app.listen(app.get("port"), function () {
    console.log("Heroku app running on port", app.get("port"));
});
