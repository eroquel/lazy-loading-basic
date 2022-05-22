import { registerImage } from "./lazy";

const maximum = 122;
const minimum = 0;

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
    mountNode.appendChild(newImage);
    registerImage(newImage);
};

myButton.addEventListener("click", addImage);
