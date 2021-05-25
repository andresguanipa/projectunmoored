/* =========
Puerto
========= */

process.env.PORT = process.env.PORT || 3000;

/* =========
Ruta
========= */

process.env.ROUTE = process.env.ROUTE || '/route';


/* =========
Entorno
========= */

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


/* ====================
BASE DE DATOS
======================= */

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/users';
} else {
    urlDB = process.env.MONDODB_URI;
}

process.env.URLDB = urlDB;