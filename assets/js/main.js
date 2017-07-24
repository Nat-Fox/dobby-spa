$(document).ready(function() {

    $('.btn-subscribe').on('click', function() {
        removeAll();
        // Obtengo el mail ingresado por el usuario
        var email = $('#input-email').val();
        if (email !== '') {
            if (validarCorreo(email)) {
                $('#error-correo').append('<div class="error-span">Ingresa un correo valido. Ejem: name@domain.com</div>');
            }
        } else {
            $('#error-correo').append('<div class="error-span">Debes ingresar tu correo</div>');
        }

        // Si todo esta correcto se limpia el formulario
        if (!validarCorreo(email)) {
            $('#input-email').val('');
        }
    });

    $('#send').on('click', function() {
        removeAll();
        // Valores ingresados por el usuario en el formulario de contacto
        var name = $('#input-name').val();
        var correo = $('#input-email-contact').val();
        var subject = $('#subject').val();
        var message = $('#message').val();

        // validación para el nombre
        if (name !== '') {
            if (contenidoAlfa(name)) {
                $('#error-name').append('<div class="error-span">Solo se permiten letras.</div>');
            }
        } else {
            $('#error-name').append('<div class="error-span">Debes ingresar tu nombre</div>');
        }
        // validación para el correo
        if (correo !== '') {
            if (validarCorreo(correo)) {
                $('#error-email').append('<div class="error-span">Ingresa un correo valido. Ejem: name@domain.com</div>');
            }
        } else {
            $('#error-email').append('<div class="error-span">Debes ingresar tu correo</div>');
        }
        // Validación para el subject
        if (subject === '') {
            $('#error-subject').append('<div class="error-name">Debes ingresar el subject</div>');
        }
        // Validación de mensaje
        if (message === '') {
            $('#error-message').append('<div class="error-name">Debes ingresar el mensaje a enviar</div>');
        }

        if (!contenidoAlfa(name) && !validarCorreo(correo)) {
            console.log('todo esta bien');
            var name = $('#input-name').val('');
            var correo = $('#input-email-contact').val('');
            var subject = $('#subject').val('');
            var message = $('#message').val('');
            alert('Tu mensaje ha sido enviado exitosamente');
        }

    })
});


/***************** Función para hacer cambio de navbar con el evento scroll en window ***********************/

function cambioDeNavbar() {
    var distanciaY = window.pageYOffset || document.documentElement.scrollTop;
    // La navbar cambia de color al de la sección correspondiente al llegar a ella
    var navbar = document.getElementById('cambio-nav');



    if (distanciaY > 100) {
        navbar.classList.add('navbar-color');
        // Si la navbar vuelve arriba regresar al color original, al logo original y al estilo de invisibilidad.
    } else {
        navbar.classList.remove('navbar-color');

    }
}

// Evento para el navegador al hacer scroll que detona la función que provoca los cambios de color en la navbar segun la distancia
window.addEventListener('scroll', cambioDeNavbar);


/******************VALIDACIONES**************** */
//función para validar el correo
function validarCorreo(correo) {
    var expRegCorreo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!expRegCorreo.test(correo)) {
        return true;
    }
}

//función que si tiene numeros da true
function contenidoAlfa(data) {
    var expReg = /^[a-zA-Z ]+$/;
    if (!expReg.test(data)) {
        return true;
    }
}

function removeAll() {
    $('#error-email').empty();
    $('#error-name').empty();
    $('#error-subject').empty();
    $('#error-message').empty();
}