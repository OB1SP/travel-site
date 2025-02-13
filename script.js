function afficherGrandeImage(image) {
    var modal = document.getElementById("modal");
    var imgModal = document.getElementById("imgModal");

    imgModal.src = image.src;
    modal.style.display = "block";
}

function fermerModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
