var modal = document.getElementById("myModal");
var modalImage = document.getElementById("modalImage");
var modalText1 = document.getElementById("textoModal");
var TextoImagen = {
  image1: {
    title: "Título para la imagen 1",
    description: "Descripción larga para la imagen 1. Este es un texto de ejemplo que puede ser tan largo como sea necesario."
  },
  image2: {
    title: "Título para la imagen 2",
    description: "Descripción larga para la imagen 2. Este es otro texto de ejemplo que puede contener una gran cantidad de contenido."
  },
  image3: {
    title: "Título para la imagen 2",
    description: "Descripción larga para la imagen 2. Este es otro texto de ejemplo que puede contener una gran cantidad de contenido."
  },
  image4: {
    title: "Título para la imagen 2",
    description: "Descripción larga para la imagen 2. Este es otro texto de ejemplo que puede contener una gran cantidad de contenido."
  }
};

function abrir(reference, imageId) {
  modal.style.display = "flex";
  modalImage.src = reference;
  modalText1.textContent = TextoImagen[imageId].description;

  localStorage.setItem("modalVisible", "true");
}

function cerrar() {
  modal.style.display = "none";
}

function cerrarModal() {
  modal.style.display = "none";

  // Al cerrar el modal, eliminar el estado del almacenamiento local
  localStorage.removeItem("modalVisible");
}

    window.onload = function() {
  var modalVisible = localStorage.getItem("modalVisible");
  if (modalVisible) {
    modal.style.display = "none";
  } else {
    modal.style.display = "none";
  }
};

window.onclick = function(event) {
  if (event.target == modal) {
    cerrar();
  }
}


