//runs openLink() when the button is clicked
document.getElementById('button1').addEventListener('click', openLink1);
document.getElementById('button2').addEventListener('click', openLink2);
document.getElementById('button3').addEventListener('click', openLink3);

//change the redirect link here
const link1 = '';
const link2 = 'https://discord.gg/TEK9BtEtkC';
const link3 = '';

// Open a new link when the button is clicked
function openLink1() {
    if (link1 == ''){
        alert('denne knap er midlertidigt deaktiveret');
        return;
    }
    alert("Du bliver nu viderestillet til: " + link1);
    window.open(link1, "_blank");
    window.close();
}

function openLink2() {
    if (link2 == ''){
        alert('denne knap er midlertidigt deaktiveret');
        return;
    }
    alert("Du bliver nu viderestillet til: " + link2);
    window.open(link2, "_blank");
    window.close();
}

function openLink3() {
    if (link3 == ''){
        alert('denne knap er midlertidigt deaktiveret');
        return;
    }
    alert("Du bliver nu viderestillet til: " + link3);
    window.open(link3, "_blank");
    window.close();
}