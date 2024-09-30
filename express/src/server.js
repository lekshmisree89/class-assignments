import  express from "express";

//app port
const app  = express();//express app object;
const PORT = 3001;


//middlewares
app.use(express.static("public"));

//routes

//get/-home route -template req object 
app.get("/",(req,res) =>{
    res.send('best server');
});


//start server
app.listen(PORT,()=>
   { console.log('server running at http://localhost:' + PORT)}
);