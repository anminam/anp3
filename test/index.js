const axios = require('axios');


const start = async () => {
    try{
    const result = await axios.get('https://ui-avatars.com/api/?name=John+Doe');
    return result.data;
    }catch(e) {
        console.log(e);
    }
}

start();