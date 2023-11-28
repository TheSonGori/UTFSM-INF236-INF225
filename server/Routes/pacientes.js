const express =require("express");
const router =express.Router();
const userSchema =require("../Models/pacientes");

router.post("/pacientes", (req, res)=> {
    const user =userSchema(req.body);
    user.save()
    .then((data) => res.json(data))
    .catch((error) => {
      console.error(error); // Puedes imprimir el error en la consola para tener más información.
      if (!res.headersSent) {
        res.status(500).json({ message: 'Error al guardar el usuario.' });
        return;
      }
    });
  
  

    res.send("create paciente");
});
router.get("/pacientes", (req,res)=>{
    userSchema.find().then((data)=>res.json(data)).catch((error)=>res.json({message: error}));
});
router.get("/pacientes/:id", (req, res)=>{
  const { id } = req.params;
  userSchema.findById(id).then((data)=>res.json(data)).catch((error)=>res.json({ message: error }))
})


module.exports =router;
