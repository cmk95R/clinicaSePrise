const form = document.frm;
form.addEventListener('submit', function (event){
    event.preventDefault();
    validar();
})

//redireccionar a la página principal o al inicio de sesión (link de referencia)
const pagina = "https://www.youtube.com/watch?v=ZTgHaPLfZ_g&ab_channel=PaulBeltrand";

//Funcion de validacion
function validar (){
    let todoOk = true;

    if (!validarNombre ()) todoOk = false;
    if (!validarApellido ()) todoOk = false;
//    if (!validarfechadenacimientoperonosecomosehacexd ()) todoOk = false;
    if (!validarLocalidad ()) todoOk = false;
    if (!validarDNI ()) todoOk = false;
    if (!validarnTelefono ()) todoOk = false;
    if (!validarMail ()) todoOk = false;

    //redirección a la página y subir a la base de datos
    if (todoOk){
        //Enviar el formulario
        document.frm.action = pagina;
        document.frm.submit();
    }
    return todoOk;
}

//funciones
//el ".trim" es para no usar los espacios en blanco

function validarNombre (){
    const inp = document.frm.Nombre;
    if (inp.value.trim().length == 0 || inp.value.trim().length >= 24){
        alert("El nombre tiene que ser de 1-24 carácteres");
        return false;
    }
    return true;
}

function validarApellido (){
    const inp = document.frm.Apellido;
    if (inp.value.trim().length == 0 || inp.value.trim().length >= 24){
        alert("El apellido tiene que ser de 1-24 carácteres");
        return false;
    }
    return true;
}

function validarLocalidad (){
    const inp = document.frm.Localidad;
    if (inp.value.trim().length == 0){
        alert("La localidad no puede quedar vacia");
        return false;
    }
    return true;
}

function validarDNI (){
    const dni = document.frm.DNI;
    if (dni.value.trim().length < 6 || dni.value.trim().length > 8){
        alert("El DNI debe contener de 6-8 números");
        return false;
    }
    return true;
}

function validarnTelefono (){
    const tel = document.frm.nTelefono;
    if (tel.value.trim().length < 8){
        alert("Ingrese un número de teléfono válido");
        return false;
    }
    return true;
}

function validarMail (){
    const inp = document.frm.Mail;
    if (inp.value.trim().length == 0 || inp.value.trim().length >= 24){
        alert("El mail debe ser válido");
        return false;
    }
    return true;
}