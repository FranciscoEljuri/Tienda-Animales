const FulImgBox = document.getElementById("fulImgBox"),
fulimg = document.getElementById("fulImg");

function openfulImg(reference){
    var elemento = document.getElementById("model").innerHTML;
    var cajon = document.getElementById("fulImgBox");
    cajon.innerHTML = elemento;

    FulImgBox.style.display ="flex";
    fulimg.src=reference;
}

function closeImg(){
    FulImgBox.style.display = "none";
}


