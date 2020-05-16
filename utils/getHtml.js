const axios = require('axios');

const getHtml = async ( url ) => {
    var config = {
        timeout: 2000
    };
    try {
        const result = await axios.get( url, config );
        return result.data;
    } catch(err) {
        console.trace(err);
        return {
            result: null,
            error: err
        }
    }
}

module.exports = getHtml;