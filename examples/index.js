const anp3 = require('../dist/anp3');

const start = async () => {
    try {
        console.log("시작");
        debugger;
        const a = anp3.start();
        a().then((value) => {
            console.log(value);

        })
    } catch(e) {
        console.trace(e);
        console.log(e);
    }
    
}

start();
