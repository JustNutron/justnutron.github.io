/*console.log("Hello");
*/
//alert("Hopp egy fasz!")

var tomb = [
    "Mi van a gépészmérnök sírján? - ? - Fogaskoszorú.",
    "Melyik háziállatnak van nyomása, ellenállása és fázisszöge is? - ??? - A csirkének, mert az Bar-Ohm-Phi!",
    "Mi a közös a róka meg a sajt között? - ??? - Egyiket sem vonzza a mágnes."
];

kattintás()


function kattintas(){
    var veletlen = Math.floor(Math.random() * tomb.length);
    document.getElementById("vicchelye").innerHTML = tomb[veletlen];
    console.log(tomb[veletlen])

    document.getElementById("kep").src=veletlen + ".jpg";
}