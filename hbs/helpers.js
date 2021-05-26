const hbs = require('hbs');

hbs.registerHelper('texto', (validacion,ok) => {

    if(ok === false && validacion === true){
        return "Disculpa, ya estas registrado";

    } else if(ok === true && validacion === false){
        return "Muchas gracias por registrarte!";

    } else if(ok === true && validacion === true){
        return "Error al escribir los campos, intente nuevamente";

    }  
    else if(ok === false && validacion === false){
        return "";

    } 

});