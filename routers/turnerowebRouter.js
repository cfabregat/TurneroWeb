const express = require('express');
const turnerowebRouter = express.Router();
const turnerowebController = require('../controllers/turnerowebController');

//  Router

turnerowebRouter.use(express.json()) ;

//  Devuelve el listado de todos los turnos
turnerowebRouter.get('/', turnerowebController.readTurno);
//  Devuelve un turno específico
turnerowebRouter.get('/:id', turnerowebController.getTurno);
//  Devuelve los proximos turnos por categoria
turnerowebRouter.get('/proximos/:categoria', turnerowebController.proximos);

//  Crea un turno
turnerowebRouter.post('/', turnerowebController.createTurno);

//  Modifica un turno específico
turnerowebRouter.put('/:id', turnerowebController.updateTurno);
//  Cambia el estado de un turno por categoria y numero
turnerowebRouter.put('/enespera/:categoria/:numero', turnerowebController.enespera);
turnerowebRouter.put('/atendiendo/:categoria/:numero', turnerowebController.atendiendo);
turnerowebRouter.put('/atendido/:categoria/:numero', turnerowebController.atendido);
turnerowebRouter.put('/cancelado/:categoria/:numero', turnerowebController.cancelado);

turnerowebRouter.patch('/cambiarcampo/:id/:campo/:valor', turnerowebController.cambiarcampo);

//  Elimina un turno específico
turnerowebRouter.delete('/:id', turnerowebController.deleteTurno);

module.exports = turnerowebRouter