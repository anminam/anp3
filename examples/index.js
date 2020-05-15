const anp3 = require('../dist/anp3');

const start = async () => {
    try {
<<<<<<< HEAD
        const result = await anp3.start();
        const {list} = result;
        return result;
    } catch(e) {
        console.log(e);
        return null;
=======
        console.log("시작");
        debugger;
        const a = anp3.start();
        a().then((value) => {
            console.log(value);

        })
    } catch(e) {
        console.trace(e);
        console.log(e);
>>>>>>> a2ed899e956e571a5f4a38b2ccf003f8f324dd7c
    }
}

start();
