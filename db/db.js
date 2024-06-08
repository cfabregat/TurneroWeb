const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config() ;

const URI = `mongodb+srv://${process.env.USERDB}:${process.env.PASSDB}@cluster0.nhouwym.mongodb.net/${process.env.DATEBASE}?retryWrites=true&w=majority&appName=Cluster0` ;

const conectarDB = async () => {
    try {
        await mongoose.connect(URI) ;
        console.log('DB conectada correctamente.');
    } catch(error){
        console.log(error);
        process.exit(1);
    }
}

//conectarDB();

module.exports = conectarDB
