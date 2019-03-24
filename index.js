
var modal = document.querySelector(".modal");

var btn = docment.querySelector(".btn");

var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

btn.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);

