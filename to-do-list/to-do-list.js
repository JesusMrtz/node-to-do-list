const FS = require('fs');


let arrayToDoList = [];


const createTask = (description) => {
    loadDB();
    let TO_DO_LIST = {
        description,
        complete: false
    };

    arrayToDoList.push(TO_DO_LIST);
    saveDB()
        .then(response => console.log(response))
        .catch(error => console.log(error));
    return TO_DO_LIST;
};

const getTaskList = () => {
    loadDB();
    return arrayToDoList;
};

const updateTask = (description, complete) => {
    loadDB();
    let index = arrayToDoList.findIndex(task => task.description === description);
    if (index >= 0) {
        arrayToDoList[index].complete = complete;
        saveDB();
        return true;
    }

    return false;
};

const dropTask = (description) => {
    loadDB();
    let index = arrayToDoList.findIndex(task => task.description === description);
    if (index >= 0) {
        arrayToDoList.splice(index, 1);
        saveDB();
        return true;
    }

    return false;
}


const loadDB = () => {
    try {
        arrayToDoList = require('../db/data.json');
    } catch (error) {
        arrayToDoList = [];
    }

};

const saveDB = () => {
    return new Promise((resolve, reject) => {
        let data = JSON.stringify(arrayToDoList);

        FS.writeFile('./db/data.json', data, (error) => {
            if (error) {
                reject(error);
            } else {
                resolve('Se ha guardado la data con éxito');
            }
        });
    });
};


module.exports = {
    createTask,
    getTaskList,
    updateTask,
    dropTask
};