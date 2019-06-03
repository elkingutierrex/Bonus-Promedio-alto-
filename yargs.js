const nombre = {
    demand: true,
    alias: 'n'
}
const matematicas = {
    demand: true,
    alias: 'm'
}
const ingles = {
    demand: true,
    alias: 'i'
}
const programacion = {
    demand: true,
    alias: 'p'
}
const creacion = {
    nombre,
    matematicas,
    ingles,
    programacion
}
const muestraestu = {
    nombre
}
const actualiza = {
    nombre,
    asignatura : {
        demand: true,
        alias: 'a'
    },
    calificacion : {
        demand: true,
        alias: 'c'
    }
}
const elimina = {
    nombre
}

const argv = require('yargs')
    .command('crear', 'Crear un estudiante', creacion)
    .command('mostar', 'Muestra los estudiantes y sus notas')
    .command('mostrarest', 'Busca el nombre de los estudiantes', muestraestu)
    .command('mostrarmat', 'Busca los estudiantes que ganaron matematica')
    .command('actualizar', 'Busca los estudiantes que ganaron matematica', actualiza)
    .command('eliminar', 'Busca los estudiantes que ganaron matematica', elimina)
    .argv;


module.exports = {
    argv
}