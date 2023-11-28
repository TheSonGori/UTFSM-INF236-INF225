const express =require("express");
const router =express.Router();
const horarioESchema =require("../Models/horario_examenes");

router.post("/horarioe", (req, res)=> {
    const user =horarioESchema(req.body);
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

router.get("/horario", (req,res)=>{
  horarioESchema.find().then((data)=>res.json(data)).catch((error)=>res.json({message: error}));
});
router.get("/horario/id/:id", (req, res)=>{
  const { id } = req.params;
  horarioESchema.findById(id).then((data)=>res.json(data)).catch((error)=>res.json({ message: error }))
})
router.get("/horario/nombre/:nombre", (req, res)=>{
  const { nombre } = req.params;
  horarioESchema.find({ nombreUsuario: nombre }).then((data)=>res.json(data)).catch((error)=>res.json({ message: error }))
})
router.get("/horario/hora/:hora", (req, res)=>{
  const { hora } = req.params;
  horarioESchema.find({ hora: hora }).then((data)=>res.json(data)).catch((error)=>res.json({ message: error }))
})
router.get("/horario/fecha/:fecha", (req, res)=>{
  const { fecha } = req.params;
  horarioESchema.find({ fecha: fecha }).then((data)=>res.json(data)).catch((error)=>res.json({ message: error }))
})

router.get("/horario/filtrar",(req, res)=>{
  const {nombreUsuario, fecha, tipo_examen, hora}=req.query;
  const filtro={};
  if(nombreUsuario){
    filtro.nombreUsuario=nombreUsuario;
  }
  if(fecha){
    filtro.fecha=fecha;
  }
  if(tipo_examen){
    filtro.tipo_examen=tipo_examen;
  }
  if(hora){
    filtro.hora=hora;
  }
  horarioESchema.find(filtro)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
})
router.put("/horario/:id", (req,res)=>{
  const {id}=req.params;
  const {nombreUsuario, nombrePaciente, rutPaciente}=req.body;
  horarioESchema.updateOne({_id:id}, {$set:{nombreUsuario,nombrePaciente, rutPaciente}}).then((data)=>res.json(data)).catch((error)=>res.json({message: error}));
})
module.exports =router;
