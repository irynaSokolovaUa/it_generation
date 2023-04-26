let flag;
let fullImage = document.getElementById("full-image");

document.querySelectorAll(".image-button").forEach(function(button) {
button.addEventListener("click", function() {
let imageSrc = button.getAttribute("data-image");
    if (fullImage.src !== imageSrc) {
        fullImage.src = imageSrc;
    }
});
});
