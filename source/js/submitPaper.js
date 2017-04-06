$(document).ready(function() {
    var submitted = false;

    $("#paper_submit_form").validate({
        rules: {
            "entry.962917036": { required: true }, // Nomb Paper
            "entry.1668992231": { // link
                required: true,
                url: true
            },
            "entry_1559425319": { url: true }, // Github
            "entry.1607377555": { url: true }, //Datos relacionados
            "entry_1607377555": { url: true }, // Titulo datos relacionados
            "entry_1372654494": { required: true } //abstract
        },
        messages: {
            "entry.962917036": "Ingrese el nombre del artículo", // Nomb Paper
            "entry.1668992231": { // link
                required: "Ingrese el nombre del artículo",
                url: "Ingrese una URL válida"
            },
            "entry_1559425319": { url: "Ingrese una URL válida" }, // Github
            "entry_1607377555": { url: "Ingrese una URL válida" }, //Datos relacionados
            "entry_628856331": { url: "Ingrese una URL válida" }, // Titulo datos relacionados
            "entry_1372654494": { required: "Ingrese el abstract del artículo" }, //abstract
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
