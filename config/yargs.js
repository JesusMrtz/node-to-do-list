const descripcion = {
    demand: true,
    alias: 'd',
    description: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    description: 'Marca como completado o pendiente la tarea'
};

const ARGV = require('yargs')
    .command('crear', 'Crea un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado completado de una tarea', { descripcion, completado })
    .command('borrar', 'Eliminar un elemento en la lista', { descripcion })
    .help()
    .argv;

module.exports = {
    ARGV
};