// Changing tab name function //
function tabName(newTitle){
    document.title = newTitle
}

function toggleChange(){
    let newTitle;

    if (document.title == "Happy Anniversary!"){
        newTitle = "Shiori~n"}
    else{
        newTitle = "Happy Anniversary!"
    }

    tabName(newTitle)
}
setInterval(toggleChange, 5000);

// Toggle footer visibility //
document.getElementById('credits-button').addEventListener('click', function () {
    var footer = document.getElementById('footer');
    if (footer.classList.contains('hide')) {
        footer.classList.remove('hide');
        footer.classList.add('show');
        footer.style.display = 'block';
    } else {
        footer.classList.remove('show');
        footer.classList.add('hide');
        setTimeout(function() {
            footer.style.display = 'none';
        }, 1000); // Match the duration of the anim-hide animation
    }
});

// Preloader //
var loader = document.getElementById('preloader');
setTimeout(function (){
    loader.style.display = "none";
}, 4000);

// Switch theme: JQUERY //
$('.switch-theme-button').click(function(e){
    e.preventDefault();
    
    let theme = $('#theme-link');
    if (theme.attr('href') === 'style.css') {
        theme.attr('href', 'style2.css');
    } else {theme.attr('href', 'style.css');}

    alert("Se cambiaron de temas exitosamente.");
});

// Form //
$('#contactForm').on('submit', function(event) {
    event.preventDefault();
    $.ajax({
        url: 'submit.php',
        type: 'POST',
        data: $(this).serialize(),
        success: function(response) {
            alert('Formulario enviado correctamente. Su contribución será revisada y añadida manualmente poSterior a la revisión.');
        },
        error: function() {
            alert('Error al enviar el formulario.');
        }
    });
});