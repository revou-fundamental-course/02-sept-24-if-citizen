//javascript 
function show_hide() {
    var click = document.getElementById("list-items");
    if (click.style.display === "none") {
       click.style.display = "block";
    } else {
       click.style.display = "none";
    }
    
 }

 function myFunction() {
      document.getElementById("myDropdown").classList.toggle("show"); //adding a class show
   }

function luasSegitiga(){
    // resetLuasSegitiga();
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