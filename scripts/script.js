console.log('ik ben gelinkt')

var knop = document.getElementById("knop");

var tanjiroVerander =  document.getElementById("Tanjiro")

knop.onclick = verander;

function verander() {
    document.getElementById("Tanjiro").src = "./images/Inosuke.jpg"
}