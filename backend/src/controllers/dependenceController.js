const Dependences = require('../models/Dependences');

//Agrega un nuevo edificio
exports.newDependence = async (req,res,next)=>{
    const dependence = new Dependences(req.body);

    try {
        //almacenar el registro
        await dependence.save();
        res.json({message:'Se agrego una nueva dependencia'});
    } catch (error) {
        console.log(error);
        next();
    }
}

//Muestra todas las dependencias
exports.showDependences = async (req,res,next)=>{
    try {
        //almacenar el registro
        const dependences = await Dependences.find({}).populate('edifice');
        res.json(dependences);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Muestra una dependencia por su ID
exports.showDependence = async (req,res,next)=>{
    try {
        //almacenar el registro
        const dependence = await Dependences.findById(req.params.idDependence)
        .populate('edifice');
        
        if(!dependence){
            res.json({message:'Esa dependencia no existe'});
            next();
        }
        
        res.json(dependence);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Muestra una dependencia por su ID de Edificio
exports.showDependenceIdEdifice = async (req,res,next)=>{
    try {
        console.log(req.params.idEdifice)
        //almacenar el registro req.params.idEdifice}
        
        const dependence = await Dependences.find().populate('edifice').where('edifice').in('_id').equals(req.params.idEdifice);
        
        if(!dependence){
            res.json({message:'Esa dependencia no existe'});
            next();
        }
        
        res.json(dependence);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Actualiza un edificio por su ID
exports.updateDependence = async (req,res,next)=>{
    try {
        //almacenar el registro
        const dependence = await Dependences.findOneAndUpdate({ _id : req.params.idDependence },
            req.body, {
                new:true
            }).populate('edifice');
            res.json(dependence);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Eliminar un dependencia por su ID
exports.deleteDependence = async (req,res,next)=>{
    try {
        //almacenar el registro
        const dependence = await Dependences.findOneAndDelete({ _id : req.params.idDependence });
            res.json({message:'La dependencia se ha eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
}