const turnerowebRepository = require( '../repositorys/turnerowebRepository');
const date = require('date-and-time')

//  Services

exports.readTurno = () => {
    try {
        return turnerowebRepository.readTurnoRepo() ;
    } catch( error) {
        console.log(error)        
    }
}

exports.getTurno = (id) => {
    try {
        return turnerowebRepository.getTurnoRepo(id);
    } catch( error) {
        console.log(error)        
    }
}

exports.proximos = (cat) => {
    try {
        return turnerowebRepository.proximos(cat);
    } catch( error) {
        console.log(error)        
    }
}

exports.createTurno = (turno) => {
    try {
        const now = new Date() ;
        turno.fecha = date.format(now, 'YYYY-MM-DD');
        turno.hora = date.format(now, 'HH:mm');
       
        return turnerowebRepository.createTurnoRepo(turno)
    } catch( error) {
        console.log(error)        
    }
}

exports.updateTurno = (id,turno) => {
    try {
        return turnerowebRepository.updateTurnoRepo(id, turno)
    } catch( error) {
        console.log(error)        
    }
}

exports.enespera = (categoria,numero) => {
    try {
        turnerowebRepository.enespera(categoria, numero)
    } catch( error) {
        console.log(error)        
    }
}

exports.atendiendo = (categoria,numero) => {
    try {
        turnerowebRepository.atendiendo(categoria, numero)
    } catch( error) {
        console.log(error)        
    }
}

exports.atendido = (categoria,numero) => {
    try {
        turnerowebRepository.atendido(categoria, numero)
    } catch( error) {
        console.log(error)        
    }
}

exports.cancelado = (categoria,numero) => {
    try {
        turnerowebRepository.cancelado(categoria, numero)
    } catch( error) {
        console.log(error)        
    }
}

exports.deleteTurno = (id) => {
    try {
        turnerowebRepository.deleteTurnoRepo(id)
    } catch( error) {
        console.log(error)        
    }
}