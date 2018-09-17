
//reveal spoiler and hide button on click
$('.spoiler button').click(function(){
  $('.spoiler span')
    .fadeIn(2000);
  $('.spoiler button')
    .hide();
})

//below: the code basically says, identify this class (spoiler)
//then, if there is an event (click) on the element (button),
//then do this code. 
$('.spoiler').on('click', 'button', function() )

//show button if JS is available
//create html

//using the "$" before variable shows that it is a jQuery variable
const $button = $('<button> Reveal Spoiler</button>');
$('.spoiler').append($button);

//hide the spoiler on page load
$('.spoiler span')
  .hide();


