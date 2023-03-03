function showImage(imageUrl) {
  // Obtener el modal
  var modal = document.getElementById("modal");

  // Obtener la imagen y asignarle la URL recibida como parámetro
  var modalImage = document.getElementById("modal-image");
  modalImage.src = imageUrl;

  //
