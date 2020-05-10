const fs = require('fs');
const getHtml = require('./getHtml');

const findObj = (list, key, value) => {
    let obj = null;
    list.some(item => {
        if( item[key] == value) {
            obj = item;
            return true;
        }

    });
    return obj;
};

const getShortSong = (name) => {
    const arr = name.split('(');
    return arr[0].trim();
};


const fileExport = (config) => {
    const fs = require('fs');
    
    let json = JSON.stringify(config.data);
    fs.writeFileSync(config.name, json);
}



module.exports = {
    findObj,
    getHtml,
    getShortSong,
    fileExport
};