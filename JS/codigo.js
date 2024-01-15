// DECLARACION Y ASIGNACIÓN DE CONSTANTES
const contenedorCertificados=document.getElementById('lista-certificados-frontend');
const contenedorProyectos=document.getElementById('cont-proyectos');

// DECLARACIÓN DE LISTAS
let listaCertificados=[];
let listaProyectos=[];

// PROTOTIPO CERTIFICADO
class Certificado{
    constructor({
        nombre,
        ubicacion
    }){
        this.nombre=nombre;
        this.ubicacion=ubicacion;
    }
}
// PROTOTIPO PROYECTO
class Proyecto{
    constructor({
        nombre,
        imagen,
        descripcion,
        urlRepo,
        urlApp
    }){
    this.nombre=nombre;
    this.imagen=imagen;
    this.descripcion=descripcion;
    this.urlRepo=urlRepo;
    this.urlApp=urlApp;
    }    
}

// INSTANCIAS CERTIFICADOS
let certificadoJavascript=new Certificado({
    nombre:'Javascript',
    ubicacion:'CERTIFICADOS/diploma-basico-javascript.pdf'
    });
let certificadoEcmascript=new Certificado({
    nombre:'Ecmascript',
    ubicacion:'CERTIFICADOS/diploma-ecmascript-6.pdf'
    });
let certificadoPoo=new Certificado({
    nombre:'POO Con Javascript',
    ubicacion:'CERTIFICADOS/diploma-javascript-poo.pdf'
});    
let certificadoApi=new Certificado({
    nombre:'Consumo API REST',
    ubicacion:'CERTIFICADOS/diploma-api.pdf'
    });
let certificadoAsincronismo=new Certificado({
    nombre:'Asincronismo con JS',
    ubicacion:'CERTIFICADOS/diploma-asincronismo-js.pdf'
    });
let certificadoHtml5=new Certificado({
    nombre:'Html',
    ubicacion:'CERTIFICADOS/diploma-mobile-first.pdf'
    });
let git=new Certificado({
    nombre:'Git',
    ubicacion:'CERTIFICADOS/diploma-git-github.pdf'
    });

let certificadoRedes=new Certificado({
    nombre:'Redes y Seguridad',
    ubicacion:'CERTIFICADOS/redes_seguridad.pdf'
    });
let certificadoSeguridad=new Certificado({
    nombre:'Seguridad Informática',
    ubicacion:'CERTIFICADOS/seguridad_informatica.pdf'
    });
let certificadoCss=new Certificado({
    nombre:'CSS',
    ubicacion:'CERTIFICADOS/diploma-css-grid.pdf'
    });
let certificadoReact=new Certificado({
    nombre:'REACT.JS',
    ubicacion:'CERTIFICADOS/diploma-react-vite-tailwindcss.pdf'
    });

// SE AGREGAN CERTIFICADOS A LA LISTA
listaCertificados.push(
    certificadoJavascript,
    certificadoEcmascript,
    certificadoPoo,
    certificadoApi,
    certificadoAsincronismo,
    certificadoHtml5,
    certificadoCss,
    git,      
    certificadoRedes,
    certificadoSeguridad,  
    certificadoReact
    );

// INSTANACIAS PROYECTOS
let proyectoReact=new Proyecto({
    nombre:'REGOT-APP',
    imagen:'PICTURES/ots_app.png',
    descripcion:'Herramienta para registro de consumos de material en obra, Desarrollo con REACT.JS',
    urlRepo:'https://github.com/Fgarcia2018/OTS_APP.git ',
    urlApp:'https://fgarcia2018.github.io/OTS_APP/'
    });
let proyectoBata=new Proyecto({
    nombre:'WAREHOUSE',
    imagen:'PICTURES/warehouse.png',
    descripcion:'Herramienta para control de inventarios, Desarrollo con HTML,CSS,JS,PHP',
    urlRepo:'https://github.com/Fgarcia2018/warehouse.git ',
    urlApp:'http://fagm.epizy.com'
    });
let proyectoFood=new Proyecto({
    nombre:'BEST FOOD',
    imagen:'PICTURES/food.png',
    descripcion:'Desarrollo con HTML y CSS',
    urlRepo:'https://github.com/Fgarcia2018/Restaurant.git',
    urlApp:'https://fgarcia2018.github.io/Restaurant/'
    });
let proyectoYard=new Proyecto({
    nombre:'YARD SALE',
    imagen:'PICTURES/yardsale.png',
    descripcion:'Desarrollo con HTML, CSS y JAVASCRIPT',
    urlRepo:'https://github.com/Fgarcia2018/curso-frontend-developer-javascript',
    urlApp:'https://fgarcia2018.github.io/curso-frontend-developer-javascript/'
    });

// SE AGREGAN PROYECTOS A LA LISTA
listaProyectos.push(
    proyectoReact,
    proyectoBata,
    proyectoFood,
    proyectoYard
    );


// SE INJECTAN LOS CERTIFICADOS EN EL HTML
let lista=document.createElement('ul')
contenedorCertificados.appendChild(lista)
listaCertificados.forEach((certificado)=>{
    let enlaceCertificado=`<a href=${certificado.ubicacion} alt="Descargar certificado" target="_blank"><li><u>${certificado.nombre}</u><p><img src='PICTURES/icons/download.svg' alt='Descargar'></p></li></a>`
    
    lista.innerHTML+=enlaceCertificado;
})

// SE INJECTAN LOS PROYECTOS EN EL HTML
listaProyectos.forEach((proyecto)=>{
tarjetaProyecto=`<div class="tarjeta-proyectos">
<figure>
    <img src=${proyecto.imagen} alt=${proyecto.nombre}>
    <figcaption>${proyecto.nombre}</figcaption>
</figure>
<P>${proyecto.descripcion}</P>
<a href=${proyecto.urlRepo} class="enlace-repo" target="_blank">Ir a Repositorio</a>
<a href=${proyecto.urlApp} class="enlace-page" target="_blank">visitar el sitio</a>
</div>`
contenedorProyectos.innerHTML+=tarjetaProyecto
});
