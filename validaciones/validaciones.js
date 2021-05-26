const validaEmail = (valor) => {
    const text = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!text.test(valor)) {
        return false;
    } else {
        return true;
    }
}



let numeros="0123456789";
const validaStringNoNumerico = (texto) => {
   for(i=0; i<texto.length; i++){
      if (numeros.indexOf(texto.charAt(i),0)!=-1){
         return false;
      }
   }
   return true;
}

module.exports = {
    validaEmail,
    validaStringNoNumerico
}