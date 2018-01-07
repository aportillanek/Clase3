var express= require('express');
var app = express();
var puerto=3000;

//app.get('/',function(req,res){
	//res.send('hola mundo');
//});

//app.listen(puerto);

app.get('/',(req,res)=> res.send('Hola mundo'));

app.listen(puerto ,()=> {
	console.log("Ejecutando en el puerto "+puerto);
});


