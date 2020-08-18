//require express to define url's

const { Router } = require('express');
//const { model } = require('mongoose');
const Aviso = require('../models/aviso');
const router = Router();

router.get('/', async (req, res) =>{
    const avisos = await Aviso.find().sort({_id:-1}).lean();
    res.render('index', { title: 'AVISOS | FERUZ', avisos });
});

router.get('/nuevoaviso', (req, res) =>{
    res.render('newAviso', { title: 'ESCRIBIR AVISO | FERUZ' });
});

router.post('/nuevoaviso', (req, res) =>{
    let body = req.body;
    body.status = false;

    Aviso.create(body, (err, Aviso) =>{
        if (err){
            throw err;
           // res.redirect('/error');
        } else{
            
            res.redirect('/avisopublicado');
        }
        
    });
});

router.get('/avisopublicado', (req, res) =>{
    res.render('publicado', { title: 'AVISO PUBLICADO | FERUZ' });
});


module.exports = router;