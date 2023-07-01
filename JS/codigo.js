const contenedorCertificados=document.getElementById('lista-certificados')
const contenedorProyectos=document.getElementById('cont-proyectos')
let listaCertificados=[]
let listaProyectos=[]

// Clase para los certificados
class Certificado{
    constructor(nombre,ubicacion){
        this.nombre=nombre
        this.ubicacion=ubicacion
    }
}
// Clase para los proyectos
class Proyecto{
    constructor(nombre,imagen,descripcion,urlRepo,urlApp){
    this.nombre=nombre
    this.imagen=imagen
    this.descripcion=descripcion
    this.urlRepo=urlRepo
    this.urlApp=urlApp
    }    
}
// Se adicionan nuevos objetos certificados
let certificadoJavascript=new Certificado('Javascript','CERTIFICADOS/diploma-basico-javascript.pdf')
let certificadoHtml5=new Certificado('Html','CERTIFICADOS/diploma-mobile-first.pdf')
let git=new Certificado('Git','CERTIFICADOS/diploma-git-github.pdf')
let python=new Certificado('Python','CERTIFICADOS/diploma-python-basico.pdf')
let certificadoJava=new Certificado('Java','CERTIFICADOS/950300515735CC16848773C.pdf')
listaCertificados.push(certificadoJavascript,certificadoHtml5,git,python,certificadoJava)

// Se adicionan nuevos proyectos
let proyectoBata=new Proyecto('BATABIT','PICTURES/Batabit.png','Desarrollo con HTML y CSS',' ',' ')
let proyectoFood=new Proyecto('BEST FOOD','PICTURES/food.png','Desarrollo con HTML y CSS','https://github.com/Fgarcia2018/Restaurant.git','https://fgarcia2018.github.io/Restaurant/')
let proyectoYard=new Proyecto('YARD SALE','PICTURES/yardsale.png','Desarrollo con HTML, CSS y JAVASCRIPT','https://github.com/Fgarcia2018/curso-frontend-developer-javascript','https://fgarcia2018.github.io/curso-frontend-developer-javascript/')


listaProyectos.push(proyectoBata,proyectoFood,proyectoYard)


// Se injecta en el html los certificados
listaCertificados.forEach((certificado)=>{
    lista=`<a href=${certificado.ubicacion} alt="Descargar certificado" target="_blank"><div><u>${certificado.nombre}</u><p>certificado ⬇</p></div></a>`
    contenedorCertificados.innerHTML+=lista
})

// Se injecta en el html los proyectos
listaProyectos.forEach((proyecto)=>{
tarjetaProyecto=`<div class="tarjeta-proyectos">
<figure>
    <img src=${proyecto.imagen} alt=${proyecto.nombre}>
    <figcaption>${proyecto.nombre}</figcaption>
</figure>
<P>${proyecto.descripcion}</P>
<a href=${proyecto.urlRepo} class="enlace-repo" target="_blank">Repositorio</a>
<a href=${proyecto.urlApp} class="enlace-page" target="_blank">Page</a>
</div>`
contenedorProyectos.innerHTML+=tarjetaProyecto
})

