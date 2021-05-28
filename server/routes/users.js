const express = require('express');

const path = require('path');

const Users = require('../models/users');

const {validaEmail, validaStringNoNumerico} = require('../../validaciones/validaciones');

const app = express();

app.get('/',(req,res) => {
    res.render('home');
})

app.post('/', (req, res) => {

    let dte = new Date();
    const fecha = `${dte.getDate()}/${dte.getMonth() + 1}/${dte.getFullYear()} - ${dte.getHours()}:${dte.getMinutes()}`;

    const {nombre, email} = req.body;

    if(validaEmail(email) === false || validaStringNoNumerico(nombre) === false){
        return res.render('home',{
            ok: true,
            validacion: true,
        });
    }

    let user = new Users({
        name: nombre,
        email: email,
        date: fecha
    })
    
    user.save((err, userDB) => {

        if (err) {
            return res.render('home',{
                ok: false,
                validacion: true,
            });
        }

        return res.render('home',{
            ok: true,
            validacion: false,
        });

    }) 

}); 

app.get(process.env.ROUTE,(req,res) => {

    Users.find((err, usersDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err: err
            });
        }

        return res.render('get',{usersDB});

    });

});

module.exports = app;