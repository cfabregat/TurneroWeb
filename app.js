const express = require('express');
const turnerowebRouter = require ('./routers/turnerowebRouter');
const PORT= process.env.PORT || 3000 ;

const app = express();
const cors = require('cors');

app.use(cors()) ;

app.use('/api/turneroweb',turnerowebRouter);

app.get('/', (req,res) => {
    res.send('Este es el servidor del TurneroWeb')
});

app.listen(PORT, () => {
    console.log(`El servidor esta escuhando en el puerto ${PORT}`)
});