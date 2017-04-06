$(document).ready(function() {
    var submitted = false;

    $("#paper_submit_form").validate({
        rules: {
            "entry.962917036": { required: true }, // Nomb Paper
            "entry.1668992231": { // link
                required: true,
                url: true
            }
        },
        messages: {
            "entry.962917036": "Ingrese el nombre del artículo", // Nomb Paper
            "entry.1668992231": { // link
                required: "Ingrese el nombre del artículo",
                url: "Ingrese una URL válida"
            }
        }
    });

    $("#paper_submit_form").on("submit", function(e) {
        if ($("#paper_submit_form").valid()){
            submitted = true;
            window.location='./form-confirmation.html';
        }
        else{
        	e.preventDefault();
        	e.stopPropagation();
        }

    });

});
