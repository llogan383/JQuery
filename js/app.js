//When running HIDE, JQUERY return the reference to FLASHMESSAGE;
//then HIDE references that same method

//This is called "Chaining"
$('#flashMessage')
  .hide()
  .slideDown(2000)
  .delay(3000)
  .slideUp(2000);

const title = "my first blog post";
const content = "this is my <strong>first</strong> post";

//puts the title in the ID listed
$('#blogTitlePreview')
  .text(title);

  //puts the content in the ID listed. 
$('#blogContentPreview')
  .html(content);