const turnerowebService = require( '../services/turnerowebService');

//  Controlador

exports.readTurno = async (req,res) => {
    try {
        let turno = await turnerowebService.readTurno() ;
        res.status(200).send(turno);
    } catch(error){
        console.log(error)
        res.status(500).send("Hubo un error al intentar recuperar las peliculas")
    }
}

exports.getTurno = async (req, res) => {
    try {
        let turno = await turnerowebService.getTurno( req.params.id ) ;
        if( !turno ){
            res.status(404).json("No existe el turno seleccionado")
        }
        res.status(200).json( turno );
        res.status(200).send() ;
    } catch(error){
        console.log(error)
        res.status(500).send("Hubo un error al intentar recuperar el turno seleccionado")
    }
}

exports.createTurno = async (req,res) => {
    try {
        await turnerowebService.createTurno( req.body )
        res.status(200).send("Turno creado") ;
    } catch(error){
        console.log(error)
        res.status(500).send("Hubo un error al crear el turno")
    }
}

exports.updateTurno = async (req,res) => {
    try {
        const {nombre, genero, precio, descripcion} = req.body;
        let id = req.params.id ;
        let turno = await Turno.findById(id) ;
        if(!turno){
            res.json("No existe la película que sea actualizar")
        }
        turno.nombre = nombre ;
        turno.genero = genero ;
        turno.precio = precio ;
        turno.descripcion = descripcion ;

        fturno = await Turno.findOneAndUpdate({_id: id}, turno, {new: true}) ;
        res.json( fturno ) ;
        res.status(200).send() ;
    } catch(error){
        console.log(error)
        res.status(500).send("Hubo un error al actualizar el turno")
    }
}

/**
 * Elimna la pelicula
 * Recibe como parametro de entrada por URL param el id de la pelicula.
 */
exports.deleteTurno = async (req,res) => {
    try {
        await turnerowebService.deleteMovies( req.params.id) ;
        res.status(200).json("El turno se elimino con exito") ;
    } catch(error){
        console.log(error)
        res.status(500).send("Hubo un error al eliminar el turno")
    }
}