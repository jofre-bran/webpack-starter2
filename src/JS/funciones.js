import '../CSS/funciones.css'

export const saludar = (nombre) =>{
    console.log("creando etiqueta h1");
    const h1 = document.createElement('H1');

    h1.innerText = `Hola ${nombre}!!`
    document.body.append(h1);
}