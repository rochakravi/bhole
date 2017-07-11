
var express = require("express");
//var routes  = require('./routes');
var http    = require('http');
var path    = require('path');

var app = module.exports = express();

//app.use(express.static(__dirname + '/View'));
//Store all HTML files in view folder.
////Store all JS and CSS in Scripts folder.

app.get('/',function(req,res){
  res.sendFile('C:/Users/admin/Desktop/dabba/multipleModuleUsingBsLikePaytm/'+'index.html');

  //C:\Users\admin\Desktop\dabba\multipleModuleUsingBsLikePaytm
  //It will find and locate index.html from View or Scripts
});

/*app.get('/about',function(req,res){
  res.sendFile('/about.html');
});

app.get('/sitemap',function(req,res){
  res.sendFile('/sitemap.html');
});*/

app.listen(3000);

