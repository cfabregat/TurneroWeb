const turnerowebService = require( '../services/turnerowebService');

//  Controlador

exports.readTurno = async (req,res) => {
    try {
        let turno = await turnerowebService.readTurno() ;
        res.status(200).json( turno );
    } catch(error){
        console.log(error)
        res.status(500).send("Hubo un error al intentar recuperar las peliculas")
    }
}

exports.getTurno = async (req, res) => {
    try {
        let turno = await turnerowebService.getTurno( req.params.id ) ;
        if( !turno ){
            res.status(404).send("No existe el turno seleccionado")
        }
        res.status(200).json( turno );
    } catch(error){
        console.log(error)
        res.status(500).send("Hubo un error al intentar recuperar el turno seleccionado")
    }
}

exports.proximos = async (req,res) => { 
    try {
        let turno = await turnerowebService.proximos( req.params.categoria ) ;
        if( !turno ){
            res.status(404).send("No existe el turno seleccionado")
        }
        res.status(200).json( turno );
    } catch(error){
        console.log(error)
        res.status(500).send("Hubo un error al intentar recuperar los proximos turnos por categoria")
    }
}

exports.createTurno = async (req,res) => {
    try {
        let ret = await turnerowebService.createTurno( req.body )
        res.status(200).json( ret ) ;
    } catch(error){
        console.log(error)
        res.status(500).send("Hubo un error al crear el turno")
    }
}

exports.updateTurno = async (req,res) => {
    try {
        let ret = await turnerowebService.updateTurno( req.params.id, req.body )
        res.status(200).json( ret ) ;
    } catch(error){
        console.log(error)
        res.status(500).send("Hubo un error al crear el turno")
    }
}

exports.enespera = async (req,res) => {
    try {
        await turnerowebService.enespera( req.params.categoria, req.params.numero )
        res.status(200).send("Turno actualizado") ;
    } catch(error){
        console.log(error)
        res.status(500).send("Hubo un error al cambiar el estado del turno a enespera")
    }
}

exports.atendiendo = async (req,res) => {
    try {
        await turnerowebService.atendiendo( req.params.categoria, req.params.numero )
        res.status(200).send("Turno actualizado") ;
    } catch(error){
        console.log(error)
        res.status(500).send("Hubo un error al cambiar el estado del turno a atendiendo")
    }
}

exports.atendido = async (req,res) => {
    try {
        await turnerowebService.atendido( req.params.categoria, req.params.numero )
        res.status(200).send("Turno actualizado") ;
    } catch(error){
        console.log(error)
        res.status(500).send("Hubo un error al cambiar el estado del turno a atendido")
    }
}

exports.cancelado = async (req,res) => {
    try {
        await turnerowebService.cancelado( req.params.categoria, req.params.numero )
        res.status(200).send("Turno actualizado") ;
    } catch(error){
        console.log(error)
        res.status(500).send("Hubo un error al cambiar el estado del turno a cancelado")
    }
}

exports.cambiarcampo = async (req,res) => {
    try {
        let ret = await turnerowebService.cambiarcampo( req.params.id, req.params.campo, req.params.valor )
        res.status(200).json( ret ) ;
    } catch(error){
        console.log(error)
        res.status(500).send("Hubo un error al cambiar el nombre")
    }
}


exports.deleteTurno = async (req,res) => {
    try {
        await turnerowebService.deleteTurno( req.params.id ) ;
        res.status(200).send("El turno se elimino con exito") ;
    } catch(error){
        console.log(error)
        res.status(500).send("Hubo un error al eliminar el turno")
    }
}