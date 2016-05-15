var dash_button = require('node-dash-button');
var open = require('open');
var dash = dash_button("f0:27:2d:5f:1d:6d", "en0"); //address from step above
dash.on("detected", function (){
    console.log("omg found");
    open("https://news.ycombinator.com");
});
