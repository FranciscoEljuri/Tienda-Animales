const FulImgBox = document.getElementById("fulImgBox"),
fulimg = document.getElementById("fulImg");

function openfulImg(reference){
    FulImgBox.style.display ="flex";
    fulimg.src=reference
}

function closeImg(){
    FulImgBox.style.display = "none";
}
