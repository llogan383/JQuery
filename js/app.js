//When running HIDE, JQUERY return the reference to FLASHMESSAGE;
//then HIDE references that same method

//This is called "Chaining"
$('#flashMessage')
  .hide()
  .slideDown(2000)
  .delay(3000)
  .slideUp(2000);

