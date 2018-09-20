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

//loops through each link in the page
//each takes two arguments

//for each anchor, get their index, nd select each anchor w jquery
//and get it's href attribute. Put it in the console. 
$('a').each(function(this){

    const url = $(this).attr('href');
    $(this).parent().append(`(${url})`);
});
