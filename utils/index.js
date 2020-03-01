
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

module.exports = {
    findObj
}