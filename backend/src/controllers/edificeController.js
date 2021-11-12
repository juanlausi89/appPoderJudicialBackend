const Edifices = require('../models/Edifices');

//Agrega un nuevo edificio
exports.newEdifice = async (req,res,next)=>{
    const edifice = new Edifices(req.body);

    try {
        //almacenar el registro
        await edifice.save();
        res.json({message:'Se agrego un nuevo edificio'});
    } catch (error) {
        res.send(error);
        next();
    }
}

//Muestra todos los edificios
exports.showEdifices = async (req,res,next)=>{
    try {
        //almacenar el registro
        const edifices = await Edifices.find({});
        res.json(edifices);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Muestra un edificio por su ID
exports.showEdifice = async (req,res,next)=>{
    try {
        //almacenar el registro
        const edifice = await Edifices.findById(req.params.idEdifice);
        
        if(!edifice){
            res.json({message:'Ese edificio no existe'});
            next();
        }
        //Mostra el edificio
        res.json(edifice);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Actualiza un edificio por su ID
exports.updateEdifice = async (req,res,next)=>{
    try {
        //almacenar el registro
        const edifice = await Edifices.findOneAndUpdate({ _id : req.params.idEdifice },
            req.body, {
                new:true
            });
            res.json(edifice);
    } catch (error) {
        res.send(error);
        next();
    }
}

//Eliminar un edificio por su ID
exports.deleteEdifice = async (req,res,next)=>{
    try {
        //almacenar el registro
        const edifice = await Edifices.findOneAndDelete({ _id : req.params.idEdifice });
            res.json({message:'El edificio se ha eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
}

//Muestra un edificio por su ID
exports.searchEdifice = async (req,res,next)=>{
    try {
        const {query}=req.params;
        //almacenar el registro
        const edifice = await Edifices.find({name:new RegExp(query,'i')});
        
        
        //Mostra el edificio
        res.json(edifice);
    } catch (error) {
        console.log(error);
        next();
    }
}