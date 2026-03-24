//runs openLink() when the button is clicked
document.getElementById('button1').addEventListener('click', openLink1);
document.getElementById('button2').addEventListener('click', openLink2);
document.getElementById('button3').addEventListener('click', openLink3);
document.getElementById('button4').addEventListener('click', openLink4);

//change the redirect link here
//if the link is empty, the button will be disabled
const link1 = 'https://forms.gle/q7a8Ad3M2A6o7GHCA';            //LAN tilmelding
const link2 = 'https://forms.gle/kfB4LRsQnrKMdzrc9';            //Turnerings registrering
const link3 = 'https://discord.gg/TEK9BtEtkC';                  //Discord
const link4 = 'https://www.instagram.com/svendborg.htx.lan.udvagl/'; //Instagram

// Open a new link when the button is clicked
function openLink1() {
    if (link1 == ''){
        alert('Denne knap er midlertidigt deaktiveret');
        return;
    }
    alert("Du bliver nu viderestillet til: " + link1);
    window.open(link1, "_blank");
    window.close();
}

function openLink2() {
    if (link2 == ''){
        alert('Denne knap er midlertidigt deaktiveret');
        return;
    }
    alert("Du bliver nu viderestillet til: " + link2);
    window.open(link2, "_blank");
    window.close();
}

function openLink3() {
    if (link3 == ''){
        alert('Denne knap er midlertidigt deaktiveret');
        return;
    }
    alert("Du bliver nu viderestillet til: " + link3);
    window.open(link3, "_blank");
    window.close();
}

function openLink4() {
    if (link4 == ''){
        alert('Denne knap er midlertidigt deaktiveret');
        return;
    }
    alert("Du bliver nu viderestillet til: " + link4);
    window.open(link4, "_blank");
    window.close();
}