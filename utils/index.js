const fs = require('fs');
const getHtml = require('./getHtml');
const _ = require('lodash');

const findObj = (list, key, value) => {
    const obj = _.find(list, (o) => (
        o[key] === value
    ))
    return obj;

}
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