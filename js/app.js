const $odd = $('a:odd');

//select all links that start wtih https
const $secureLinks = $('a[href^="https://"]');

//selects all links ending with .pdf
const $pdfs = $('a[href$=".pdf"]');

$secureLinks.attr('target', '_blank');

//cuase .pdf files to be donwloaded when clicked; DOESNT WORK IN CHROME
$pdfs.attr( 'download', true );