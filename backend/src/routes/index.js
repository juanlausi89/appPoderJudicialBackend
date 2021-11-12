const express = require('express');
const router = express.Router();
const edificeController = require('../controllers/edificeController');
const dependenceController = require('../controllers/dependenceController');


module.exports = function(){
    /**Edifices */
    
    //Agrega nuevos edificios via POST
    router.post('/edifices',edificeController.newEdifice);

    //Obtener todos los edificios
    router.get('/edifices',edificeController.showEdifices);

    //Muestra un edificio en especifico (ID)
    router.get('/edifices/:idEdifice',edificeController.showEdifice);

    //Actualizar un edificio en especifico (ID)
    router.put('/edifices/:idEdifice',edificeController.updateEdifice);

    //Eliminar un edificio en especifico (ID)
    router.delete('/edifices/:idEdifice',edificeController.deleteEdifice);

     //Muestra un edificio en especifico (ID)
     router.post('/edifices/search/:query',edificeController.searchEdifice);

    /**Dependences */
    //Agrega nuevos dependencia via POST
    router.post('/dependences',dependenceController.newDependence);

    //Mostrar las dependencias
    router.get('/dependences',dependenceController.showDependences);

    //Muestra una dependencia en especifico (ID)
    router.get('/dependences/:idDependence',dependenceController.showDependence);

    //Muestra una dependencia en especifico (ID)
    router.get('/dependences/edifice/:idEdifice',dependenceController.showDependenceIdEdifice);
    
    //Actualizar una dependencia en especifico (ID)
    router.put('/dependences/:idDependence',dependenceController.updateDependence);

    //Eliminar una dependencia en especifico (ID)
    router.delete('/dependences/:idDependence',dependenceController.deleteDependence);

    return router;
}