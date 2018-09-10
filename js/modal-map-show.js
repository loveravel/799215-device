var btn_map = document.querySelector(".map-img");

var modal_map = document.querySelector(".modal-map");
var close_map = modal_map.querySelector(".modal-close");

btn_map.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal_map.classList.add("modal-map-show");
});

close_map.addEventListener("click", function(evt) {
    modal_map.classList.remove("modal-map-show");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (modal_map.classList.contains("modal-map-show")) {
            modal_map.classList.remove("modal-map-show");
        }
    }
});