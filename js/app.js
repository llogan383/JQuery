const $odd = $('a:odd');
const $pdfCheckbox = $('<label><input type="checkbox"> Allow PDF downloads</label>');


//select all links that start wtih https
const $secureLinks = $('a[href^="https://"]');

//selects all links ending with .pdf
const $pdfs = $('a[href$=".pdf"]');

$secureLinks.attr('target', '_blank');

//cuase .pdf files to be donwloaded when clicked; DOESNT WORK IN CHROME
$pdfs.attr( 'download', true );

$secureLinks.addClass('secure');
$pdfs.addClass('pdf');

$pdfs.on('click', function(event){

    //checks if checkbox is chcked
    if ($(':checked').length === 0){
        //prevent the default browser behavior. There are dozens of
        //default methods to choose from. 
        event.preventDefault();
        //alert the user
        alert('Please check the box to allow PDF downloads');
    } 
});
$('#links').append($pdfCheckbox);
