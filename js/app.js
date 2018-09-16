// //When running HIDE, JQUERY return the reference to FLASHMESSAGE;
// //then HIDE references that same method

// //This is called "Chaining"
// $('#flashMessage')
//   .hide()
//   .slideDown(2000)
//   .delay(3000)
//   .slideUp(2000);

// const title = "my first blog post";
// const content = "this is my <strong>first</strong> post";

//Add an event listener for the button 
$('#previewButton').click(function(){
  //store the ID value in 'title; using the VAL method,
  //which returns what is entered in the form
  const title = $('#blogTitleInput').val();
  const content = $('#blogContentInput').val();
  //takes the input from above and puts it into the 
  //id listed
  $('#blogTitlePreview')
    .text(title);
  $('#blogContentPreview')
    .html(content);
});
