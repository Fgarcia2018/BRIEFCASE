const contenedorCertificados=document.getElementById('lista-certificados');
const contenedorProyectos=document.getElementById('cont-proyectos');
let listaCertificados=[];
let listaProyectos=[];

// Clase para los certificados
class Certificado{
    constructor(nombre,ubicacion){
        this.nombre=nombre;
        this.ubicacion=ubicacion;
    }
}
// Clase para los proyectos
class Proyecto{
    constructor(nombre,imagen,descripcion,urlRepo,urlApp){
    this.nombre=nombre;
    this.imagen=imagen;
    this.descripcion=descripcion;
    this.urlRepo=urlRepo;
    this.urlApp=urlApp;
    }    
}
// Se adicionan nuevos objetos certificados
let certificadoJavascript=new Certificado('Javascript','CERTIFICADOS/diploma-basico-javascript.pdf');
let certificadoEcmascript=new Certificado('Ecmascript','CERTIFICADOS/diploma-ecmascript-6.pdf');
let certificadoApi=new Certificado('Consumo API REST','CERTIFICADOS/diploma-api.pdf');
let certificadoAsincronismo=new Certificado('Asincronismo con JS','CERTIFICADOS/diploma-asincronismo-js.pdf');
let certificadoHtml5=new Certificado('Html','CERTIFICADOS/diploma-mobile-first.pdf');
let git=new Certificado('Git','CERTIFICADOS/diploma-git-github.pdf');
let python=new Certificado('Python','CERTIFICADOS/diploma-python-basico.pdf');
let certificadoJava=new Certificado('Java','CERTIFICADOS/estructuras_control_java.pdf');
let certificadoRedes=new Certificado('Redes y Seguridad','CERTIFICADOS/redes_seguridad.pdf');
let certificadoSeguridad=new Certificado('Seguridad Informática','CERTIFICADOS/seguridad_informatica.pdf');
let certificadoCss=new Certificado('CSS','CERTIFICADOS/diploma-css-grid.pdf');
let certificadoSql=new Certificado('SQL','CERTIFICADOS/certificado-sql.pdf');
let certificadoReact=new Certificado('REACT.JS','CERTIFICADOS/diploma-react-vite-tailwindcss.pdf');
listaCertificados.push(certificadoJavascript,certificadoEcmascript,certificadoApi,certificadoAsincronismo,certificadoHtml5,certificadoCss,git,python,certificadoJava,certificadoRedes,certificadoSeguridad,certificadoSql,certificadoReact);

// Se adicionan nuevos proyectos
let proyectoBata=new Proyecto('WAREHOUSE','PICTURES/warehouse.png','Herramienta para control de inventarios, Desarrollo con HTML,CSS,JS,PHP','https://github.com/Fgarcia2018/warehouse.git ','http://fagm.epizy.com');
let proyectoFood=new Proyecto('BEST FOOD','PICTURES/food.png','Desarrollo con HTML y CSS','https://github.com/Fgarcia2018/Restaurant.git','https://fgarcia2018.github.io/Restaurant/');
let proyectoYard=new Proyecto('YARD SALE','PICTURES/yardsale.png','Desarrollo con HTML, CSS y JAVASCRIPT','https://github.com/Fgarcia2018/curso-frontend-developer-javascript','https://fgarcia2018.github.io/curso-frontend-developer-javascript/');


listaProyectos.push(proyectoBata,proyectoFood,proyectoYard);


// Se injecta en el html los certificados
listaCertificados.forEach((certificado)=>{
    lista=`<a href=${certificado.ubicacion} alt="Descargar certificado" target="_blank"><div><u>${certificado.nombre}</u><p>certificado ⬇</p></div></a>`
    contenedorCertificados.innerHTML+=lista;
})

// Se injecta en el html los proyectos
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

