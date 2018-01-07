var express=  require('express');
var bodyParser =require('body-parser');
var mongoose= require ('mongoose');
var Schema =mongoose.Schema;

mongoose.connect('mongodb://localhost/paises');

var userSchemaJSON={
  nombre:String,
  apellido:String,
  email:String,
  edad:Number
  
};

var user_schema=new Schema(userSchemaJSON);

var User= mongoose.model('User',user_schema);

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

app.get('/usuarios',(req,res)=> {
     User.find(function(err,doc)
     {
       if(err) return err;
       console.log(doc);

     })

});
app.post('/registrar',(req,res)=>{
	console.log(req.body.apellido);
	var user= new User({
      nombre:req.body.nombre,
      apellido:req.body.apellido,
      email:req.body.email,
      edad:req.body.edad

	});
	user.save(function(){
		res.send('Hemos creado al usuario');
	})
})

app.listen(puerto,()=> {
   console.log('Ejecutandose en el ',puerto);
});