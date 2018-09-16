//remove the green box with Javascript
var box = document.querySelector('.box');
// box.style.display = 'none';

//hide the green box w Jquery
//jQuery('.box').hide();

//Use the $ instead of the word JQUERY
// $('.box').hide();

// $('.box').show();


// box.addEventListener('click', function() {
//   alert('You clicked the button!');
// });

// Same as above w Jquery
$('.box').click(function() {
  alert('You clicked the button w Jquery!');
} );