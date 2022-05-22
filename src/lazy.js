//entries: todos los elementos se muestren o no en el viewport. Eston elementos estan en un array y por eso se puede usar **filter**.
//inIntersecting: son lo elemento que se estan mostrando en la pantalla/viewport, si no se está mostrando, no se está intersectando.

const isIntersectingGr = (entry) => {
    return entry.isIntersecting; //devuelve un boleanos si el elemento está o no en el viewport, es decir, está o no visible.
};

const action = () => {
    console.log("KLO");
};

const myObserver = new IntersectionObserver((entries) => {
    //Funcion que hacer por imagen
    entries.filter(isIntersectingGr).forEach(action); //por cada uno de los elementos que están en el viewpor, se realizará un **action**
});

export const registerImage = (imagen) => {
    //intersectionObserver -> observer(imagen)
    myObserver.observe(imagen);
};
