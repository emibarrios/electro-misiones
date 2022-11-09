const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./public'));
app.set('view engine','ejs');


app.get('/',((req,res) =>{
    res.send('funciono')
}))

app.get('/envios-devoluciones',((req,res) =>{
    res.render('envios-devoluciones')
}))

app.get('/formas-pago',((req,res) =>{
    res.render('formas-pago')
}))

app.get('/sobre-nosotros',((req,res) =>{
    res.render('sobre-nosotros')
}))

app.listen(3030, ()=> {
    console.log('Servidor inicializado enhttp://localhost:3030')
})