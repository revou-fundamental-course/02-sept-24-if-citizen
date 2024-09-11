//javascript
function luasSegitiga(){
    var a = document.forms["hitung-luas-segitiga"]["pjg-alas"].value;
    var t = document.forms["hitung-luas-segitiga"]["tinggi"].value;
    var l = 1/2*a*t;
    document.getElementById("detail1").innerHTML= "= 1/2 x a x t";
    document.getElementById("detail2").innerHTML= "= 1/2 x "+ a + " x "+ t;
    document.getElementById("detail3").innerHTML = `= ${l}`;
}