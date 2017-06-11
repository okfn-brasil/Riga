var submitted = false;
$(document).ready(function() {
    var errorPrefix = "_error";

    function checkRequired(element,length){
      var errorElem = element + errorPrefix,
          checkedLenght = $("#" + element + ' ' + 'input[type="checkbox"]:checked').length,
          condition = length === 1 ? checkedLenght === 0 : checkedLenght < length,
          errorMsg = length > 1 ? ('Seleccione ' + length +'opciones') : 'Seleccione al menos una opción';
      if(condition){
        $("#" + element).after('<p id="' + errorElem + '" class="row error">' + errorMsg + '</p>');
        location.href = "#" + element; 
        return false;
      }
      $("#" + errorElem).remove();
      return true;
    }

    $("#paper_submit_form").on("submit", function(e) {    
        var valid = checkRequired("regions",1) && checkRequired("categories",1) && checkRequired("objectives",1)
            && checkRequired("sectors",1) && checkRequired("methodologies",1) && checkRequired("pubTypes",1);
        if(valid){
            submitted = true;
            window.location = './form-confirmation.html';            
        }
        else{
            submitted = false;
            e.preventDefault();
            e.stopPropagation();
        }

    });

});
