const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./Database") 
const app = express();
const userRoutes = require("./Routes/pacientes")
const horarioERoutes = require("./Routes/horario_examenes")
app.set ("port", process.env.PORT || 5000);

//Middlewares

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
db();

app.use('/api', userRoutes);
app.use('/api', horarioERoutes);

app.get("/", (req,res)=>{
    res.send("Welcome to my API")
});


app.listen(app.get("port"), () =>{
    console.log(`Servidor esta corriendo en el puerto: ${app.get("port")}`);
});
                         
module.exports=app;
