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
        
        let new_turno = new Turno(turno);
        await new_turno.save();
    }catch(error){
        console.log(error)
    }
}

exports.updateTurnoRepo = async (id,turno) => {
    try {
        let upd_turno = new Turno.findById(id);
        if( !upd_turno ){
            await upd_turno.updateMoviesRepo();
        }
    }catch(error){
        console.log(error)
    }
}

exports.deleteTurnoRepo = async (id) => {
    try {
        let del_turno = new Turno.findById(id);
        if( !del_turno ){
            console.log( 'No existe el turno a eliminar');
            return 'No se encontro el turno';
        }
        await del_turno.findOneAndDelete({_id:id});
    }catch(error){
        console.log(error)
    }
}