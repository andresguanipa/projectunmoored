var socket = io();

//Enviar información - Retroalimentación

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const div = document.getElementById("texto")

nombre.addEventListener('click',function(){

    socket.emit('retroalimentacion', email.value, function(res) {

        if(!res.status){
            div.innerHTML = `<p id="alert" style="color:red;"><b>${res.resp}</b></p>`

        } else{
            div.innerHTML = `<p id="alert" style="color:green;"><b>${res.resp}</b></p>`
    
        }

    });

})

