var http = require('http'); 
var url = require('url'); 
const log4js = require('log4js'); 
var express = require('express'); 
var app = express();

//ÉçÉKÅ[
const logger = log4js.getLogger();
logger.level = 'debug';

log4js.configure({
  appenders : {
    system : {type : 'file', filename : 'C:\\Users\\k_shibata\\Desktop\\myapp\\notice.log'}
  },
  categories : {
    default : {appenders : ['system'], level : 'debug'},
  }
});


app.get('/:path', function(req, res) {

     logger.debug("--WHOLE URL-----------------------------");
     logger.debug(req.protocol + '://' + req.headers.host + req.url);
     logger.debug("---------------------------------------------");

     logger.debug("--PATH----------------------------------");
     logger.debug(req.params.path);

     logger.debug("--QUERY PARAM--------------------------------");
     const query = req.url.slice(req.url.indexOf("?") + 1);
     const keyVal = query.split('&');
     for(var val in keyVal){
        logger.debug(keyVal[val]);
     }
     logger.debug("---------------------------------------------");

     res.write("SUCCESS");
     res.end();
});


app.listen(8050, function(){

});

