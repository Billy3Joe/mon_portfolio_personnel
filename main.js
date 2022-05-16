// Au clic, l'emoji de la main vous amènera en haut de la page
document.getElementById('top-button').addEventListener('click', function() {
    window.scrollTo(0, 0);
});

$(window).scroll(function() {
    var threshold = 208; // nombre de pixels avant le bas de la page que vous souhaitez commencer à estomper
    var op = (($(document).height() - $(window).height()) - $(window).scrollTop()) / threshold;
    if (op <= 13) {
        $("#top-button").show();
    } else {
        $("#top-button").hide();
    }
});




// Basculer entre les modes jour et nuit
$('#switch1').on('click', function() {
    $('body').toggleClass('night')
})


// Si l'utilisateur visite après 19 heures du soir, le corps changera le style en cours de nuit
$(document).ready(function() {
    var date = new Date();
    var current_time = date.getHours();
    if (current_time > 19 || current_time < 6)
    // Si l'heure est après 19h00 ou avant 6h00, appliquez le thème de la nuit au "corps"
        document.body.className = "night";
    else
    // Sinon, utilisez le thème "jour"
        document.body.className = "";
});

$(window).load(function() {
    $("#top-button").hide();
});


//Si vous survolez les langues que j'ai utilisées dans Project Box, l'animation s'estompera
$('.project_used span').on({
    mouseover: function() {
        event.preventDefault();
        $(this).animate({ opacity: 0.25 });
    },
    mouseout: function() {
        event.preventDefault();
        $(this).animate({ opacity: 1 });
    }
});