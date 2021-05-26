const { io } = require('../server')

const Users = require('../models/users')

const {validaEmail} = require('../../validaciones/validaciones');

io.on('connection', (client) => {

    //Mensaje retroalimentación

    client.on('retroalimentacion', (data, callback) => {

        if (!data || data.trim() === "" || validaEmail(data) === false) {
            callback({ resp: 'El email ingresado es incorrecto' });

        } else {

            Users.findOne({email: data}, (err, userDB) => {

                if (err) {
                    callback({resp: 'Error en el servidor', status: false})

                }
        
                if (!userDB) {

                    callback({resp: 'Email disponible', status: true})
 
                } else{

                    callback({resp: 'El email ingresado ya está registrado', status: false})

                }

            })

        }

    });

})