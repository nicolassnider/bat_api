import express from 'express';

const app = express();
const port = 3000;

app.use((req,res,next)=>{
	res.setHeader('Access-Control-Allow-Origin','*');
	res.setHeader('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,PATCH,DELETE');
	res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
	next();
});

app.get('/',(_req,res)=>{
	res.send({message:'Hello World'});
})

app.listen(port,()=>{
	console.log('Express listening on port ',port);
})