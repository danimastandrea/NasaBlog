window.addEventListener('load', obtenerDatos);

function obtenerDatos(){
    const url= 'https://api.nasa.gov/planetary/apod?api_key=i2L1Mx1HracXjGONjXifpF4hGwriDa2CuuHgnkEF';

    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => mostrarDatos(resultado))

}

function mostrarDatos({title, explanation, url}){
    const titulo= document.querySelector('#titulo');
    titulo.innerHTML= title;

    const info= document.querySelector('#info');
    info.innerHTML= explanation;

    const img= document.querySelector('#img');
    img.innerHTML= `
    <img src="${url} " alt="">
    `
    
}


