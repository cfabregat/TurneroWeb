const Turno = require('./TurneroWeb')
const conectarDB = require( '../db/db') ;

conectarDB() ;

exports.readTurnoRepo = async () => {
    try {
        let red_turno = await Turno.find() ;
        return red_turno
    }catch(error){
        console.log(error)
    }
}

exports.getTurnoRepo = async (id) => {
    try {
        let get_turno = await Turno.find({_id:id}) ;
        return get_turno
    }catch(error){
        console.log(error)
    }
}

exports.createTurnoRepo = async (turno) => {
    try {
        //  Deberia obtener el ultimo numero en esa categoria..
        let dato = await Turno.find( {"categoria": turno.categoria} ).sort({numero:-1}).limit(1) ;
        let prox_numero = dato[0].numero + 1 ;
        //console.log( prox_numero );    

        turno.numero = prox_numero ;
        let new_turno = new Turno(turno);
        await new_turno.save();
    }catch(error){
        console.log(error)
    }
}

exports.updateTurnoRepo = async (id,turno) => {
    try {
        let upd_turno = await Turno.findById(id) ;
        if(!turno){
            res.json("No existe el turno a actualizar")
        }
        upd_turno.fecha = turno.fecha ;
        upd_turno.hora = turno.hora ;
        upd_turno.categoria = turno.categoria ;
        upd_turno.numero = turno.numero ;
        upd_turno.nombre = turno.nombre ;
        upd_turno.estado = turno.estado ;

        fturno = await Turno.findOneAndUpdate({_id: id}, upd_turno, {new: true}) ;
    } catch(error){
        console.log(error)
    }
}

exports.deleteTurnoRepo = async (id) => {
    try {
        let del_turno = await Turno.findById(id);
        if( !del_turno ){
            return 'No se encontro el turno';
        }
        await Turno.findOneAndDelete({_id:id});
    }catch(error){
        console.log(error)
    }
}