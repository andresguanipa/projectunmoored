if(window.location.pathname === '/'){

    function mostrar(e) {
        if (e.classList.contains("fa-moon-o")) { 
            e.classList.remove("fa-moon-o"); 
            e.classList.add("fa-sun-o"); 
            e.style.color = "rgb(225, 225, 0)";
            document.body.style.background = '#181818';
            document.querySelector('#userName').style.color = '#fff';
    
            let links = document.querySelectorAll('.link');
    
            // pega todos
            for (let i = 0; i < links.length; i++) {
                links[i].style.filter = 'grayscale(100%)';
            }
    
            let icono = document.querySelector('.icon');
            // Pega apenas o primeiro do array
            icono.style.color = '#fff';
    
            let signup = document.querySelector('#signup');
            signup.style.color = '#fff';
    
            let inputs = document.querySelectorAll(".form-font");
    
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].style.backgroundColor = '#181818';
                inputs[i].style.color = '#fff';
            }
    
    
        } else { //senão
            e.classList.remove("fa-sun-o"); 
            e.classList.add("fa-moon-o"); 
            e.style.color = "#585858";
            document.body.style.background = 'rgb(243, 242, 242)';
            document.querySelector('#userName').style.color = 'rgb(99, 99, 99)';
    
            let links = document.querySelectorAll('.link');
            // Pega apenas o primeiro do array
            links[0].style.filter = 'grayscale(0%)';
            // pega todos
            for (let i = 0; i < links.length; i++) {
                links[i].style.filter = 'grayscale(0%)';
            }
    
            let icono = document.querySelector('.icon');
            // Pega apenas o primeiro do array
            icono.style.color = '#785148';
    
            let signup = document.querySelector('#signup');
            signup.style.color = '#000';
    
            let inputs = document.querySelectorAll('.form-font');
    
            // pega todos
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].style.backgroundColor = 'rgb(243, 242, 242)';
                inputs[i].style.color = '#000';
    
            }
    
        }
    
    }

}