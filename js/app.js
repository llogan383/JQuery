//hide the spoiler on page load
$('.spoiler span')
  .hide();

//reveal spoiler and hide button on click
$('.spoiler button').click(function(){
  $('.spoiler span')
    .fadeIn(2000);
  $('.spoiler button')
    .hide();
})
