import { registerImage } from "./lazy.js";

const maximum = 122;
const minimum = 1;

const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;

const createImageNode = () => {
    const container = document.createElement("div");
    container.className = "p-4";
    const imagen = document.createElement("img");
    imagen.className = "mx-auto";
    imagen.width = "320";
    imagen.src = `https://randomfox.ca/images/${random()}.jpg`;

    container.appendChild(imagen);

    return container;
};

const mountNode = document.getElementById("images");

const myButton = document.querySelector("button");
const addImage = () => {
    const newImage = createImageNode();
    mountNode.appendChild(newImage); //Esto es para insertar la imagen en el DOM
    registerImage(newImage); //Esto es para que escuche la imagen que se insertó en el DOM
};

myButton.addEventListener("click", addImage);
