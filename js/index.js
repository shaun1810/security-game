$('#atm1').on('click', function(event) {
    event.preventDefault();
    alert('body');
});

$(document).keydown(function(e) {
    switch (e.which) {
    case 37:
        $('#character').stop().animate({
            left: '-=60'
        }); //left arrow key
        break;
    case 38:
        $('#character').stop().animate({
            top: '-=60'
        }); //up arrow key
        break;
    case 39:
        $('#character').stop().animate({
            left: '+=60'
        }); //right arrow key
        break;
    case 40:
        $('#character').stop().animate({
            top: '+=60'
        }); //bottom arrow key
        break;
    }
})