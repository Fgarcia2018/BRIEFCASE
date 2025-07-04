import { Proyecto } from "./Proyectos.mjs";

let listaProyectos=[];

// INSTANACIAS PROYECTOS
let proyectoReact=new Proyecto({
    nombre:'REGOT-APP',
    imagen:'PICTURES/ots_app.png',
    descripcion:'Herramienta para registro de consumos de material en obra, Desarrollo con REACT.JS',
    urlRepo:'https://github.com/Fgarcia2018/OTS_APP.git ',
    urlApp:'https://fgarcia2018.github.io/OTS_APP/',
    urlDemo:'PAGES/pagevideo.html',
    video:'../VIDEOS/OTSAPP.mp4'
    });
let proyectoBata=new Proyecto({
    nombre:'WAREHOUSE',
    imagen:'PICTURES/warehouse.png',
    descripcion:'Herramienta para control de inventarios, Desarrollo backend, frontend con HTML,CSS,JS,PHP. Base de datos con MYSQL',
    urlRepo:'https://github.com/Fgarcia2018/warehouse.git ',
    urlApp:'https://warehouseproject.wuaze.com',
    urlDemo:'PAGES/pagevideo.html',
    video:'../VIDEOS/WAREHOUSE.mp4'
    });
let proyectoShop=new Proyecto({
    nombre:'SHOPTEMPLATE',
    imagen:'PICTURES/shoptemplate.png',
    descripcion:'Desarrollo de plantilla para agendamiento de servicios, utilizando REACT JS',
    urlRepo:'https://github.com/Fgarcia2018/shoptemplate.git',
    urlApp:'https://fgarcia2018.github.io/shoptemplate/',
    urlDemo:'PAGES/pagevideo.html',
    video:'../VIDEOS/SHOPTEMPLATE.mp4'
    });
let proyectoYard=new Proyecto({
    nombre:'YARD SALE',
    imagen:'PICTURES/yardsale.png',
    descripcion:'Desarrollo con HTML, CSS y JAVASCRIPT',
    urlRepo:'https://github.com/Fgarcia2018/curso-frontend-developer-javascript',
    urlApp:'https://fgarcia2018.github.io/curso-frontend-developer-javascript/',
    urlDemo:`PAGES/pagevideo.html`,
    video:''

    });

// SE AGREGAN PROYECTOS A LA LISTA
 listaProyectos.push(
    proyectoShop,
    proyectoReact,
    proyectoBata,
      
    );

    export class ListaProyectos{
        constructor(
            lista=listaProyectos
        ){
            this.lista=lista;
        }
    }    
    
   