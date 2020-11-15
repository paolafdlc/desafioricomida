$(document).ready(function() {

    $('[data-toggle="tooltip"]').tooltip();

    $("a").click(function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var gato = this.hash
            $("html, body").animate({
                scrollTop: $(gato).offset().top
            }, 800, function() {
                window.location.hash = gato;
            });
        }
    });

    $("#enviarCorreo").click(function(){
        alert("El correo fue enviado correctamente...");
    });

    $("#ingredientes").on('dblclick', function(e){
        $(this).css({'color':'red'});
    });

    $("#preparacion").on('dblclick', function(e){
        $(this).css({'color':'red'});
    });

    $("#panqueques").click(function(){
        $("#panqueques-content").toggle("slow");
    });

    $("#tiramisu").click(function(){
        $("#tiramisu-content").toggle("slow");
    });

    $("#plateada").click(function(){
        $("#plateada-content").toggle("slow");
    });

});