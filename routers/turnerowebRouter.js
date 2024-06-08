const express = require('express');
const turnerowebRouter = express.Router();
const turnerowebController = require('../controllers/turnerowebController');

//  Router

turnerowebRouter.use(express.json()) ;

turnerowebRouter.get('/', turnerowebController.readTurno);
turnerowebRouter.get('/:id', turnerowebController.getTurno);

turnerowebRouter.post('/', turnerowebController.createTurno);

turnerowebRouter.put('/:id', turnerowebController.updateTurno);

turnerowebRouter.delete('/:id', turnerowebController.deleteTurno);

module.exports = turnerowebRouter