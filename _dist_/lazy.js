//entries: todos los elementos se muestren o no en el viewport, en este caso, las imagenes. Estos elementos estan en un array y por eso se puede usar **filter**.
//El parametro **entries** puede tener otro nombre, pero siempre tendrá el array con los elementos.
//inIntersecting: son los elementos que se estan mostrando en la pantalla/viewport, si no se está mostrando, no se está intersectando.

const isIntersectingGr = (entry) => {
    return entry.isIntersecting; //devuelve un boleanos si el elemento está o no en el viewport, es decir, está o no visible.
};

//**action** al ser ejecutada por por la **CLASE IntersectionObserver**, esta función adquiere nuevas propiedades, como recibir un parametro, el cual
//es el **entry** elemento que se observa en el momento en el que se ejecunta la función.
const action = (entry) => {
    const node = entry.target; //aquí se almacena en la variable **node** el elemento que se está escuchando al momento de ejecutar **action**
    console.log("KLK");
    myObserver.unobserve(node); //esto es para que luego de que se ejecute la función se deje de escuchar al elemento/nodo, en este caso, la imagen.
};

//Instancio IntersectionObserver y luego creo una función.
//Esta funcion es la que determinará que hacer por cada imagen que reciba, es decir, por cada uno de los elementos que están en el viewpor, se realizará un **action**
const myObserver = new IntersectionObserver((entries) => {
    entries.filter(isIntersectingGr).forEach(action); //Itera cadua una de las imagenes y evalua si se vizualiza en el viewport y si es True, ejecuta **action**
});

export const registerImage = (imagen) => {
    //intersectionObserver -> observer(imagen), el intersectionObserver observa/escucha la imagen que estoy recibien por parametro **imagen**
    myObserver.observe(imagen); //myObserver observa/escucha la imagen
};
