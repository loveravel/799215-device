var btn_write_us = document.querySelector(".btn-write-us");

var modal_write_us = document.querySelector(".modal-write-us");
var close_write_us = modal_write_us.querySelector(".modal-close");

var form_write_us = modal_write_us.querySelector(".write-us-form");
var your_name = modal_write_us.querySelector(".your-name");
var your_email = modal_write_us.querySelector(".your-email");
var your_message = modal_write_us.querySelector(".your-message");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStroageSupport = false;
}

btn_write_us.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal_write_us.classList.add("modal-write-us-show");
    if (storage) {
        login.value = storage;
        your_email.focus();
    } else {
        your_name.focus();
    }
});

close_write_us.addEventListener("click", function(evt) {
    modal_write_us.classList.remove("modal-write-us-show");
    modal_write_us.classList.remove("modal-error");
});

form_write_us.addEventListener("submit", function(evt) {
    if (!your_name.value || !your_email.value || !your_message.value) {
        evt.preventDefault();
        modal_write_us.classList.remove("modal-error");
        modal_write_us.offsetWidth = modal_write_us.offsetWidth;
        modal_write_us.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("your_name", your_name.value);
        }
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (modal_write_us.classList.contains("modal-write-us-show")) {
            modal_write_us.classList.remove("modal-write-us-show");
            modal_write_us.classList.remove("modal-error");
        }
    }
});

/*???*/
form_write_us.addEventListener("click", function(evt) {
    if (modal_write_us.querySelector(".modal-error")) {
        modal_write_us.classList.remove("modal-error");
    }
});