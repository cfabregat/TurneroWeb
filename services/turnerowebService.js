const turnerowebRepository = require( '../repositorys/turnerowebRepository');

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
        turnerowebRepository.getTurnoRepo(id);
    } catch( error) {
        console.log(error)        
    }
}

exports.createTurno = (turno) => {
    try {
        turnerowebRepository.createTurnoRepo(turno)
    } catch( error) {
        console.log(error)        
    }
}

exports.updateTurno = (id,turno) => {
    try {
        turnerowebRepository.updateTurnoRepo(id, turno)
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