const anp3 = require('../dist/anp3');

const start = async () => {
    try {

        const a = anp3.start();
        a().then((value) =>{
            value

        })
    } catch(e) {
        console.log(e)
    }
    
}

start();
