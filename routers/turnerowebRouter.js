const express = require('express');
const turnerowebRouter = express.Router();
const turnerowebController = require('../controllers/turnerowebController');

//  Router

turnerowebRouter.use(express.json()) ;

turnerowebRouter.get('/', turnerowebController.readTurno);
turnerowebRouter.get('/:id', turnerowebController.getTurno);
//  Devuelve los proximos turnos por categoria
turnerowebRouter.get('/proximos/:categoria', turnerowebController.proximos);

turnerowebRouter.post('/', turnerowebController.createTurno);

turnerowebRouter.put('/:id', turnerowebController.updateTurno);
//  Cambia el estado de un turno por categoria y numero
turnerowebRouter.put('/atendiendo/:categoria/:numero', turnerowebController.atendiendo);
turnerowebRouter.put('/atendido/:categoria/:numero', turnerowebController.atendido);
turnerowebRouter.put('/cancelado/:categoria/:numero', turnerowebController.cancelado);


turnerowebRouter.delete('/:id', turnerowebController.deleteTurno);

module.exports = turnerowebRouter