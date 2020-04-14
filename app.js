const COLORS = require('colors');
const { ARGV } = require('./config/yargs');
const TO_DO_LIST = require('./to-do-list/to-do-list');

const COMAND = ARGV._[0];


switch (COMAND) {
    case 'crear':
        let task = TO_DO_LIST.createTask(ARGV.descripcion);
        console.log(task);
        break;
    case 'listar':
        let list = TO_DO_LIST.getTaskList();

        list.forEach(item => {
            console.log('===== Por hacer ====='.green);
            console.log(item.description);
            console.log(item.complete);
            console.log('===================='.green);
        });
        break;
    case 'actualizar':
        let update = TO_DO_LIST.updateTask(ARGV.descripcion, ARGV.completado);
        console.log(`¿La tarea se completo?: ${update}`);
        break;
    case 'borrar':
        let dropTrask = TO_DO_LIST.dropTask(ARGV.descripcion);
        console.log(`¿La tarea se elimino?: ${dropTrask}`);
        break;
    default:
        console.log('Comando no válido');
        break;
}