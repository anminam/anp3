const crawsite = require('./lib/crawsite');


const init = async () => {

    const mList = await crawsite.melon.init();
    const gList = await crawsite.genie.init();
    
    calc([mList, gList]);
}

const calc = ([mList, gList]) => {
    const arr = [];

}


init();