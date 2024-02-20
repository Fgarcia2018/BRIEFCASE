import { Certificado } from "./Certificado.mjs";

let listaCertificados=[];


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
   
    export class ListaCertificados{
        constructor(
            lista=listaCertificados
        ){
            this.lista=lista;
        }
    }