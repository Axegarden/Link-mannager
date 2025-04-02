//runs openLink() when the button is clicked
document.getElementById('button').addEventListener('click', openLink);

//change the redirect link here
const link = '';

// Open a new link when the page is loaded
window.onload = function() {
    if (link==''){
        alert('beklager. der er ingen links tilgængelige lige nu.');
        window.close();
    }
    else{
        window.open(link, '_blank');
        window.close();
    }
};
// Open a new link when the button is clicked
function openLink() {
    window.open(link, '_blank');
    window.close();
}