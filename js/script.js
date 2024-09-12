//javascript 
function show_hide() {
    var click = document.getElementById("list-items");
    if (click.style.display === "none") {
       click.style.display = "block";
    } else {
       click.style.display = "none";
    }
    
 }

 function myDropdown() {
      document.getElementById("myDropdown").classList.toggle("show"); //adding a class show
   }

// Luas Segitiga
function luasSegitiga(){
    var a = document.forms["hitung-luas-segitiga"]["pjg-alas"].value;
    var t = document.forms["hitung-luas-segitiga"]["tinggi"].value;
    //check if not null / not number
    if (validasi(a) && validasi(t) == true){
        var l = 1/2*a*t;
        document.getElementById("detail1").innerHTML= "= 1/2 x a x t";
        document.getElementById("detail2").innerHTML= "= 1/2 x "+ a + " x "+ t;
        document.getElementById("detail3").innerHTML = `= ${l}`;
    }  else{
        console.log("Inputan tidak sesuai");
    }
}

function resetLuasSegitiga(){
    document.forms["hitung-luas-segitiga"]["pjg-alas"].value = "";
    document.forms["hitung-luas-segitiga"]["tinggi"].value = "";
    document.getElementById("detail1").innerHTML= "";
    document.getElementById("detail2").innerHTML= "";
    document.getElementById("detail3").innerHTML = "";
}

// Keliling segitiga
function kelSegitiga(){
    // resetLuasSegitiga();
    var a = document.forms["hitung-kel-segitiga"]["a"].value;
    var b = document.forms["hitung-kel-segitiga"]["b"].value;
    var c = document.forms["hitung-kel-segitiga"]["c"].value;
    //check if not null / not number
    if (validasi(a) && validasi(b) && validasi(c) == true){
        var k = parseInt(a) + parseInt (b) + parseInt (c);
        document.getElementById("detail-k1").innerHTML= "= a + b + c";
        document.getElementById("detail-k2").innerHTML= "= "+ a + " + "+ b + " + "+ c;
        document.getElementById("detail-k3").innerHTML = `= ${k}`;
    }  else{
        console.log("Inputan tidak sesuai");
    }
}
function resetKelSegitiga(){
    document.forms["hitung-kel-segitiga"]["a"].value = "";
    document.forms["hitung-kel-segitiga"]["b"].value = "";
    document.forms["hitung-kel-segitiga"]["c"].value = "";
    document.getElementById("detail-k1").innerHTML= "";
    document.getElementById("detail-k2").innerHTML= "";
    document.getElementById("detail-k3").innerHTML = "";
}
// =================================================================================
// Luas Jajargenjang
function luasJajargenjang(){
    var a = document.forms["hitung-luas-jajargenjang"]["alas-jjgj"].value;
    var t = document.forms["hitung-luas-jajargenjang"]["tinggi-jjgj"].value;
    //check if not null / not number
    if (validasi(a) && validasi(t) == true){
        var l = 1/2*a*t;
        document.getElementById("detail-j1").innerHTML= "= a x t";
        document.getElementById("detail-j2").innerHTML= "= "+ a + " x "+ t;
        document.getElementById("detail-j3").innerHTML = `= ${l}`;
    }  else{
        console.log("Inputan tidak sesuai");
    }
}

function resetLuasJajargenjang(){
    document.forms["hitung-luas-jajargenjang"]["alas-jjgj"].value = "";
    document.forms["hitung-luas-jajargenjang"]["tinggi-jjgj"].value = "";
    document.getElementById("detail-j1").innerHTML= "";
    document.getElementById("detail-j2").innerHTML= "";
    document.getElementById("detail-j3").innerHTML = "";
}

// Keliling segitiga
function kelJajargenjang(){
    // resetLuasSegitiga();
    var a = document.forms["hitung-kel-jjgj"]["a"].value;
    var b = document.forms["hitung-kel-jjgj"]["b"].value;
    //check if not null / not number
    if (validasi(a) && validasi(b) == true){
        var k = 2 * (parseInt(a) + parseInt (b));
        document.getElementById("detail-kj1").innerHTML= "= 2 x (a + b)";
        document.getElementById("detail-kj2").innerHTML= "= 2 x ("+ a + " + "+ b + ")";
        document.getElementById("detail-kj3").innerHTML = `= ${k}`;
    }  else{
        console.log("Inputan tidak sesuai");
    }
}
function resetKelJajargenjang(){
    document.forms["hitung-kel-jjgj"]["a"].value = "";
    document.forms["hitung-kel-jjgj"]["b"].value = "";
    document.getElementById("detail-kj1").innerHTML= "";
    document.getElementById("detail-kj2").innerHTML= "";
    document.getElementById("detail-kj3").innerHTML = "";
}

function validasi(variabel){
    var numbers = /^[0-9]+$/;
    if (variabel == ""){
        alert("Field tidak boleh kosong");
        return false;
    }else if (!variabel.match(numbers)){
        alert("Isi dengan angka");
        return false;
    }else{
        return true;
    }
}