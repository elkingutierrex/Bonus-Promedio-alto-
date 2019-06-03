const fs = require('fs');
listaEstudiantes = [];

const crear = (estudiante) => {
    listar()
    let est = {
        nombre: estudiante.nombre,
        matematicas: estudiante.matematicas,
        ingles: estudiante.ingles,
        programacion: estudiante.programacion
    }
    let duplicado = listaEstudiantes.find( nom => nom.nombre == estudiante.nombre)
    if(!duplicado){
        listaEstudiantes.push(estudiante);
        console.log(listaEstudiantes);
        guardar()
    }else{
        console.log('Ya existe otro estudiante con ese nombre');
    }
};

const listar = () => {
    try {
        listaEstudiantes = require('./listado.json');
        //listaEstudiantes = JSON.parse(fs.readFileSync('listado.json')); // funcion opcional a utilizar cuando el objeto varie asincronicamente
    } catch (error) {
        listaEstudiantes = [];
    }
};

const guardar = () => {
    let datos = JSON.stringify(listaEstudiantes);
    fs.writeFile('listado.json', datos, (err) => {
        if (err) throw (err);
        console.log('Archivo creado con exito')
    })
};

const mostrar = () => {
    listar();
    console.log('Notas de los estudiantes')
    listaEstudiantes.forEach(estudiante => {
        console.log(estudiante.nombre);
        console.log('Notas :')
        console.log('   Matematicas     '+ estudiante.matematicas);
        console.log('   Ingles          ' + estudiante.ingles);
        console.log('   Programacion    ' + estudiante.programacion + '\n');          
    });
};

const mostrarest = (nom)=>{
    listar();
    let est = listaEstudiantes.find(buscar => buscar.nombre == nom)
    if(!est){
        console.log('No existe este estudiante');
    }else{
        console.log(est.nombre);
        console.log('Notas :')
        console.log('   Matematicas     ' + est.matematicas);
        console.log('   Ingles          ' + est.ingles);
        console.log('   Programacion    ' + est.programacion + '\n'); 
    }    
};

const mostrarmat = ()=>{
    listar();
    let ganan = listaEstudiantes.filter(mat => mat.matematicas >= 15)
    if(ganan.lengt == 0){
        console.log('Ningun estudiante va ganando matematicas');
    }else{
        console.log('Los estudiantes que van ganando matematicas son: ')
        ganan.forEach(estudiante => {
            console.log(estudiante.nombre);
            console.log('Notas :')
            console.log('   Matematicas     ' + estudiante.matematicas + '\n');
        })
    }
}
const actualizar = (nombre, asignatura, calificacion)=>{
    listar();
    let encontrado = listaEstudiantes.find(buscar => buscar.nombre == nombre)
    if(!encontrado){
        console.log('El estudiante no existe')
    }else{
        encontrado[asignatura] = calificacion;
        guardar();
    }
};
const eliminar = (nom)=>{
    listar();
    let nuevo = listaEstudiantes.filter(est => est.nombre != nom)
    if(nuevo.length == listaEstudiantes.length){
        console.log('Ningun estudiante tiene el nombre indicado, por lo tanto no se elimino');
    }else{
        listaEstudiantes = nuevo;
        guardar();
    };    
};
const mostrarpromgana = (nom)=>{
    listar();
    let ganaPromedio = listaEstudiantes.filter(est => ((est.matematicas + est.ingles + est.programacion)/3)> 3)
    ganaPromedio.forEach(est => {
        console.log(est.nombre);
        console.log('   Promedio notas:     ' + ((est.matematicas + est.ingles + est.programacion)/3) + '\n');
    })

}



module.exports = {
    crear
    ,mostrar
    ,mostrarest
    ,mostrarmat
    ,actualizar
    ,eliminar
    ,mostrarpromgana
}