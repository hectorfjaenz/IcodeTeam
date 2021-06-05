// Funcionalidad de menu hamburguesa

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

// Remueve menu

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

//*Validacion del formulario
const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, //* Letras y espacios, pueden llevar acentos.
  email:
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
  telefono: /^\d{1,14}$/, //* 7 a 14 numeros.
};

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const textarea = document.getElementById("textarea");

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "nombre":
      if (expresiones.nombre.test(e.target.value)) {
        console.log("correcto");
      } else {
        Swal.fire({
          icon: "error",
          title:
            "El campo no puede estar vacio, ni contener numeros, ni simbolos.",
          confirmButtonColor: "#f27700",
        });
      }

      break;
    case "email":
      if (expresiones.email.test(e.target.value)) {
        console.log("correo correcto");
      } else {
        console.log("correo incorrecto");
      }
      break;
    case "telefono":
      if (expresiones.telefono.test(e.target.value)) {
        console.log("correcto");
      } else {
        Swal.fire({
          icon: "error",
          title: "Ingrese solo numero, no puede contener letras, ni simbolos",
          confirmButtonColor: "#f27700",
        });
      }
      break;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  if (
    nombre.value.trim() === "" &&
    email.value.trim() === "" &&
    telefono.value.trim() === "" &&
    textarea.value.trim() === ""
  ) {
    Swal.fire({
      icon: "error",
      title: "Todos los campos son requeridos",
      confirmButtonColor: "#f27700",
    });
  } else {
    formulario.reset();
  }
}
