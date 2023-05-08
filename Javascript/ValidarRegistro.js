function validarPass(pass, passRepetir) {
    var valido = false;

    if (pass === passRepetir && (pass !== "" && passRepetir !== "")) {
        valido = true;
    }
    return valido;
}


function expresiones() {
    var expr_nombreUsuario = new RegExp("^[a-zA-Z]+");
    var expr_nombre = new RegExp("^[a-zA-Z]+");
    var expr_apellido = new RegExp("^[a-zA-Z]+");
    var expr_email = new RegExp("^[a-z0-9._-]+@[a-z0-9.-]+\.([a-z]{2,4})+$");


    var expresiones = new Array(expr_nombreUsuario, expr_nombre, expr_apellido, expr_email);
    return expresiones;
}

var error = "";

function validarElemento(expresion, patron, id) {
    if (!patron.test(expresion)) {
        error = error + id + "<br>";
    }
}



function validar() {

    error = "";

    validarElemento(document.getElementById("nombreUsuario").value, expresiones()[0], "nombreUsuario");
    validarElemento(document.getElementById("nombre").value, expresiones()[1], "nombre");
    validarElemento(document.getElementById("apellido").value, expresiones()[2], "apellido");
    validarElemento(document.getElementById("email").value, expresiones()[3], "email");

    var casilla = document.getElementById("condiciones").checked;

    if (!casilla) {
       
        error += "Debes aceptar las condiciones de uso";
    }

    var salida = "";

    if (error == "") {
        salida = "Registro completado satisfactoriamente"
    } else {
        salida = "Los valores introducidos no son validos: <br>" + error + "<br>";
    }

    var pass = document.getElementById("pass").value;
    var passConf = document.getElementById("passRepetir").value;

    if (pass === "" || "passConf" === "") {
        salida += "Las constraseñas no pueden estar vacias";
    } else if (!validarPass(pass, passConf)) {
        salida += 'Las contrasenas no son iguales <br>';
    }



    document.getElementById("mostrar").innerHTML = salida;
}