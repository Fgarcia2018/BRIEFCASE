import { ListaCertificados } from "./ListaCertificados.mjs";
import { ListaProyectos } from "./ListaProyectos.mjs";

// DECLARACION Y ASIGNACIÓN DE CONSTANTES
const contenedorCertificados=document.getElementById('lista-certificados-frontend');
const contenedorProyectos=document.getElementById('cont-proyectos');

let certificados=new ListaCertificados()

// SE INJECTAN LOS CERTIFICADOS EN EL HTML
let lista=document.createElement('ul')
contenedorCertificados.appendChild(lista)
certificados.lista.forEach((certificado)=>{
    // let nomCertificado=document.createElement('div');
    let enlaceCertificado=`<div class='card'>
    <u class='face'>${certificado.nombre}</u>
        <p ><a href=${certificado.ubicacion} alt="Descargar Certificado ${certificado.nombre}" target="_blank">
            <li class='face back'><img src='PICTURES/icons/download.svg' alt='Descargar'></li></a></p></div>`    
    lista.innerHTML+=enlaceCertificado;
});

// SE INJECTAN LOS PROYECTOS EN EL HTML
let proyectos=new ListaProyectos();

proyectos.lista.forEach((proyecto)=>{
let tarjetaProyecto=`<div class="tarjeta-proyectos">
    <h4>${proyecto.nombre}</h4>
<figure>
    <img src=${proyecto.imagen} alt=${proyecto.nombre}>
    <figcaption>${proyecto.descripcion}</figcaption>
</figure>
<a href=${proyecto.urlDemo+'#'+proyecto.nombre} class="enlace-demo" target="_blank">Ver Demo</a>
<a href=${proyecto.urlRepo} class="enlace-repo" target="_blank">Ir a Repositorio</a>
<a href=${proyecto.urlApp} class="enlace-page" target="_blank">visitar el sitio</a>
</div>`;
contenedorProyectos.innerHTML+=tarjetaProyecto;
});
