let modal = document.getElementById("modal");
let body = document.body; // Get the body element

// Get the image and insert it inside the modal - use its "alt" text as a caption
let images = document.querySelectorAll(".modal-image");
let modalImg = document.getElementById("modalImg");
images.forEach(function(img) {
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    body.style.overflow = "hidden"; // Disable scrolling
  }
});

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  body.style.overflow = "auto"; // Re-enable scrolling
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    body.style.overflow = "auto"; // Re-enable scrolling
  }
}
