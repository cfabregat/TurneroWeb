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

exports.proximos = async (cat) => {
    try {
        let get_turno = await Turno.find({categoria:cat}) ;
        return get_turno
    }catch(error){
        console.log(error)
    }
}

exports.createTurnoRepo = async (turno) => {
    try {
        //  Deberia obtener el ultimo numero en esa categoria..
        let dato = await Turno.find( {"categoria": turno.categoria} ).sort({numero:-1}).limit(1) ;

        let prox_numero = 1 ;
        if( dato.length >0 ){
            prox_numero = dato[0].numero + 1 ;
        }

        turno.numero = prox_numero ;
        let new_turno = new Turno(turno);
        let turno_creado = await new_turno.save() ;
        return turno_creado;
    }catch(error){
        console.log(error)
    }
}

exports.updateTurnoRepo = async (id,turno) => {
    try {
        let upd_turno = await Turno.findById(id) ;
        if(!upd_turno){
            return( { error: 1, descripcion: "No existe el turno a actualizar", turno: [] }  )
        }
        upd_turno.fecha = turno.fecha ;
        upd_turno.hora = turno.hora ;
        upd_turno.categoria = turno.categoria ;
        upd_turno.numero = turno.numero ;
        upd_turno.nombre = turno.nombre ;
        upd_turno.estado = turno.estado ;

        fturno = await Turno.findOneAndUpdate({_id: id}, upd_turno, {new: true}) ;
        if(!fturno){
            return( { error: 1, descripcion: "No existe el turno a actualizar", turno: [] } )
        } else {
            return( { error: 0, descripcion: "Operacion saticfactoria", turno: [ fturno ] } )
        }
        
    } catch(error){
        console.log(error)
    }
}

exports.enespera = async (categoria,numero) => {
    try {
        let sea_turno = await Turno.findOne( {"categoria": categoria, "numero": numero} ) ;
        if(!sea_turno){
            console.log("No existe el turno a actualizar")
        }
        sea_turno.estado = "en espera" ;
        const upt_turno = await Turno.findOneAndUpdate( { _id: sea_turno._id }, sea_turno, { new: true } );
        if (!upt_turno) {
            console.log('Error al actualizar el estado');
          }
    } catch(error){
        console.log(error)
    }
}

exports.atendiendo = async (categoria,numero) => {
    try {
        let sea_turno = await Turno.findOne( {"categoria": categoria, "numero": numero} ) ;
        if(!sea_turno){
            console.log("No existe el turno a actualizar")
        }
        sea_turno.estado = "atendiendo" ;
        const upt_turno = await Turno.findOneAndUpdate( { _id: sea_turno._id }, sea_turno, { new: true } );
        if (!upt_turno) {
            console.log('Error al actualizar el estado');
          }
    } catch(error){
        console.log(error)
    }
}

exports.atendido = async (categoria,numero) => {
    try {
        let sea_turno = await Turno.findOne( {"categoria": categoria, "numero": numero} ) ;
        if(!sea_turno){
            console.log("No existe el turno a actualizar")
        }
        sea_turno.estado = "atendido" ;
        const upt_turno = await Turno.findOneAndUpdate( { _id: sea_turno._id }, sea_turno, { new: true } );
        if (!upt_turno) {
            console.log('Error al actualizar el estado');
          }
    } catch(error){
        console.log(error)
    }
}

exports.cancelado = async (categoria,numero) => {
    try {
        let sea_turno = await Turno.findOne( {"categoria": categoria, "numero": numero} ) ;
        if(!sea_turno){
            console.log("No existe el turno a actualizar")
        }
        sea_turno.estado = "cancelado" ;
        const upt_turno = await Turno.findOneAndUpdate( { _id: sea_turno._id }, sea_turno, { new: true } );
        if (!upt_turno) {
            console.log('Error al actualizar el estado');
          }
    } catch(error){
        console.log(error)
    }
}

exports.cambiarcampo = async (id,campo,valor) => {
    try {
        let upd_turno = await Turno.findById(id) ;
        if(!upd_turno){
            return( { error: 1, descripcion: "No existe el turno a actualizar", turno: [] }  )
        }
        switch( campo ){
            case "fecha":       upd_turno.fecha = valor ;            break ;
            case "hora":        upd_turno.hora =valor ;              break ;
            case "categoria":   upd_turno.categoria = valor ;        break ;
            case "numero":      upd_turno.numero = valor ;           break ;
            case "nombre":      upd_turno.nombre = valor ;           break ;
            case "estado":      upd_turno.estado = valor ;           break ;
        }

        fturno = await Turno.findOneAndUpdate({_id: id}, upd_turno, {new: true}) ;
        if(!fturno){
            return( { error: 1, descripcion: "No existe el turno a actualizar", turno: [] } )
        } else {
            return( { error: 0, descripcion: "Operacion saticfactoria", turno: [ fturno ] } )
        }
        
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

exports.resetdia = async (resetfecha) => {
    try {
        let del_turno = await Turno.deleteMany( { fecha: resetfecha } );
        if( !del_turno ){
            return 'No se encontro el turno';
        } else {
            return( del_turno ) ;
        }
    }catch(error){
        console.log(error)
    }
}