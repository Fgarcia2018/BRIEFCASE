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
let certificadoSass=new Certificado({
    nombre:'SASS',
    ubicacion:'CERTIFICADOS/diploma-sass.pdf'
    });    
let certificadoRedesI=new Certificado({
    nombre:'Redes De Internet',
    ubicacion:'CERTIFICADOS/diploma-redes.pdf'
    });     
let certificadoNube=new Certificado({
    nombre:'Introducción A La Nube',
    ubicacion:'CERTIFICADOS/diploma-intro-nube.pdf'
    });   
let certificadoIOT=new Certificado({
    nombre:'Internet De Las Cosas',
    ubicacion:'CERTIFICADOS/INTERNET-DE-LAS-COSAS.pdf'
    }); 
let certificadoSql=new Certificado({
        nombre:'Diseño De BD Con SQL',
        ubicacion:'CERTIFICADOS/certificado-sql.pdf'
        });  
let certificadoSqa=new Certificado({
            nombre:'SQA',
            ubicacion:'CERTIFICADOS/Certificado-sqa.pdf'
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
    certificadoReact,
    certificadoSass,
    certificadoRedesI,
    certificadoNube,
    certificadoIOT,
    certificadoSql,
    certificadoSqa
    );
   
    export class ListaCertificados{
        constructor(
            lista=listaCertificados
        ){
            this.lista=lista;
        }
    }