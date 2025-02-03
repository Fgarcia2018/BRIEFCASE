import {ListaProyectos} from './ListaProyectos.mjs'
const contenedorVideos=document.getElementById('contenedor-videos-demo');

let proyectos=new ListaProyectos();

// SE INJECTAN DEMOS DE LOS PROYECTOS EN EL HTML
proyectos.lista.forEach((proyecto)=>{
    let videoProyecto=`<div class='video-demo'>
    <h3 id=${proyecto.nombre}>${proyecto.nombre}</h3>            
    <video controls preload="auto">        
        <source src=${proyecto.video}>      
    </video>
    </div>`
    contenedorVideos.innerHTML+=videoProyecto
});


