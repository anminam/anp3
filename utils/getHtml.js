const axios = require('axios');

const getHtml = async ( url ) => {
    try {
        const result = await axios.get( url, {
            timeout: 1000
        });
        return {
            result
        }
    } catch(err) {
        console.trace(err);
        return {
            result: null,
            error: err
        }
    }
}

module.exports = getHtml;