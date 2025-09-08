// Typewriter Effect

const text = "B.Sc CS Student | Aspiring Software Developer | Future Full-Stack Engineer";

let i = 0;

function typeWriter() {

  if (i < text.length) {

    document.getElementById("tagline").innerHTML += text.charAt(i);

    i++;

    setTimeout(typeWriter, 80);

  }

}

typeWriter();

// Button click alert

function sayHello() {

  alert("Hello! Thanks for visiting my portfolio 😊");

}