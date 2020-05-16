const anp3 = require('../dist/anp3');

const start = async () => {
    try {
        const result = await anp3.start();
        const {list} = result;
        return result;
    } catch(e) {
        console.log(e);
        return null;
    }
}

start();
