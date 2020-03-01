const getHtml = require('./getHtml');
const findObj = (list, title, value) => {
    let obj = null;
    list.some(item => {
        if( item[title] == value) {
            obj = item;
            return true;
        }

    });
    return obj;
};


const getShortSong = (name) => {
    const arr = name.split('(');
    return arr[0].trim();
} 

module.exports = {
    findObj,
    getHtml,
    getShortSong
}