var express=  require('express');
var bodyParser =require('body-parser');


var app = express();

var puerto = 3000;

app.set('view engine' , 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=> {
  res.render('./index',{nombre:'luis'});
});
app.get('/nombre/:nombre',(req,res)=> {
  res.render('./viewName',{nombre:req.params.nombre});
});

app.get('/:nombre/:apellido',(req,res)=> {
  res.render('./viewName');
});
app.get('/registro',(req,res)=> {
  res.render('./registro');
});
app.post('/registrar',(req,res)=>{
	console.log(req.body.apellido);
})

app.listen(puerto,()=> {
   console.log('Ejecutandose en el ',puerto);
});