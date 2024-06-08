const turnerowebRepository = require( '../repositorys/turnerowebRepository');

//  Services

exports.readTurno = () => {
    try {
        turnerowebRepository.readTurnoRepo() ;
    } catch( error) {
        console.log(error)        
    }
}

exports.getTurno = (id) => {
    try {
        turnerowebRepository.getTurnosRepo(id);
    } catch( error) {
        console.log(error)        
    }
}

exports.createTurno = (turno) => {
    try {
        turnerowebRepository.createTurnosRepo(turno)
    } catch( error) {
        console.log(error)        
    }
}

exports.updateTurno = (id,turno) => {
    try {
        turnerowebRepository.updateTurnosRepo(id, turno)
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