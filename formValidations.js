const emailInput = document.getElementById("emailInput");
const emailError = document.getElementById("emailError");
const submitButton = document.getElementById("submitButton");
const commentInput = document.querySelector(".contact__comment");
const form = document.querySelector(".contact__form");

const validateEmail = (email) => {
    const re = /^[a-zñÑ0-9_-]+(?:\.[a-zñÑ0-9_-]+)*@(?:[a-z0-9](?:[a-z0-9-_]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9]*[a-z0-9])?$/;
    return re.test(email);
};

const checkInputs = () => {
    let valid = true;

    if (!validateEmail(emailInput.value)) {
        emailError.textContent = "El email es incorrecto";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    if (commentInput.value.trim() === '') {
        valid = false;
    }

    submitButton.disabled = !valid;
};

emailInput.addEventListener("input", checkInputs);
commentInput.addEventListener("input", checkInputs);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Aquí puedes agregar el código para manejar el envío del formulario
    console.log("Formulario enviado");
});
