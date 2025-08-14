let Nigga = false;
const magicBttn = document.getElementById("bttn");
magicBttn.addEventListener("click", () => {
    document.body.style.backgroundColor = Nigga ? 'white' : 'black';
    document.body.style.color  = Nigga ? 'black' : 'white';
    Nigga = !Nigga;
})