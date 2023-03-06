// TODO: Incluir los paquetes necesarios para esta aplicación
const inquirer = require("Inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Crear una serie de preguntas para la entrada de usuario
const questions = [
    {
        type:'input',
        name:'titulo',
        message:'Cual es el nombre del proyecto',
        validate: (value)=>{
            if(value){
                return true
            }else{
                return 'Se necesita un nombre de proyecto'
            }
        }
    },
    {
        type:'input',
        name:'Descripcion',
        message:'Proporcione una breve descripcion de su proyecto',
        validate: (value)=>{
            if(value){
                return true
            }else{
                return 'Se necesita una descripcion de su proyecto'
            }
        }
    },
    {
        type:'input',
        name:'Instalacion',
        message:'¿Cuáles son los pasos necesarios para instalar su proyecto?',
        validate: (value)=>{
            if(value){
                return true
            }else{
                return 'Se necesita una guia de su proyecto'
            }
        }
    },
    {
        type:'input',
        name:'Uso',
        message:'Proporcione instrucciones y ejemplos de uso',
        validate: (value)=>{
            if(value){
                return true
            }else{
                return 'Se necesita una guia de su proyecto'
            }
        }
    },
    {
        type:'input',
        name:'Colaboradores',
        message:'Mencione a las personas que participaron en este proyecto',
        validate: (value)=>{
            if(value){
                return true
            }else{
                return 'Se necesita almenos 1 colaborador'
            }
        }
    },
    {
        type:'list',
        name:'license',
        message:'Utiliza licencias?',
        choices:['Ninguna', 'Apache 2.0', 'GNU GPLv3', 'MIT', 'ISC'],
        validate: (value)=>{
            if(value){
                return true
            }else{
                return 'Seleccione una licencia'
            }
        }
    },
    {
        type:'input',
        name:'Pruebas',
        message:'escriba pruebas para su aplicación',
        validate: (value)=>{
            if(value){
                return true
            }else{
                return 'escriba almenos una prueba para su aplicacion'
            }
        }
    },
    {
        type:'input',
        name:'githubUser',
        message:'Cual es su usuario en GitHub?',
        validate: (value)=>{
            if(value){
                return true
            }else{
                return 'Escriba su nombre de usuario'
            }
        }
    },
    {
        type:'input',
        name:'userEmail',
        message:'Cual es su e-mail?',
        validate: (value)=>{
            if(value){
                return true
            }else{
                return 'Escriba su e-mail'
            }
        }
    },
];

// TODO: Crear una función para escribir el archivo README
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data);
}

// TODO: Crear una función para inicializar la aplicación
function init() {
    inquirer.prompt(questions).then((answer)=>{
        writeToFile('README.md', generateMarkdown({...answer}))
    })
}

// Llamada de función para inicializar la aplicación
init();
