const axios = require('axios');

const getHtml = async (url) => {
    try {
        return await axios.get(url);
    } catch(err) {
        throw `${err}, 가져오지 못했습니다.`
    }
}

module.exports = getHtml;