const mongoose = require("mongoose");

const userSchema= mongoose.Schema({
    nombre:{
        type: String,
        require: true
    },
    apellido:{
        type: String,
        require:true
    },
    rut:{
        type:String,
        require:true
    }
});
module.exports =mongoose.model('Paciente', userSchema);