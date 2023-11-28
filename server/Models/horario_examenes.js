const mongoose = require("mongoose");

const horarioESchema= mongoose.Schema({
    fecha:{
        type: String,
        require: true
    },
    hora:{
        type: String,
        require:true
    },
    nombreUsuario:{
        type:String,
        require:true
    },
    nombrePaciente:{
        type:String,
        require: true
    },
    rutPaciente:{
        type:String,
        require: true
    },
    tipo_examen:{
        type:String,
        require: true
    },
    flag:{
        type:Boolean,
        require: true
    }
});
module.exports =mongoose.model('Horario_Examenes', horarioESchema);