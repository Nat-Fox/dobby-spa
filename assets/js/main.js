// Funcionamiento del carrusel 
$(document).ready(function() {


    var fotos = [
        'assets/img/slide1.jpg',
        'assets/img/slide2.jpg',
        'assets/img/slide3.jpg',
    ];

    var contador = 0;
    setInterval(function() {
        contador++;
        if (contador > fotos.length - 1) {
            contador = 0;
        }
        console.log(contador);
        appendPhoto(fotos[contador]);

    }, 3000);

    // Click de las flechas para mover izquierda - derecha
    $('#arrow-left').on('click', function() {
        contador--;
        if (contador < 0) {
            contador = fotos.length - 1;
        }
        console.log(contador);
        appendPhoto(fotos[contador]);

    });

    $('#arrow-right').on('click', function() {
        contador++;
        if (contador > fotos.length - 1) {
            contador = 0;
        }
        console.log(contador);
        appendPhoto(fotos[contador]);
    });

    function appendPhoto(photo) {
        $('#foto').empty().append('<img src="' + photo + '" alt="">');
    }

    // Click de los circulos para cambiar la foto

    $('#circle-1').on('click', function() {
        appendPhoto(fotos[0]);
    });
    $('#circle-2').on('click', function() {
        appendPhoto(fotos[1]);
    });
    $('#circle-3').on('click', function() {
        appendPhoto(fotos[2]);
    });
});