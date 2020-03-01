const crawsite = require('./lib/crawsite');


const init = () => {

    const gList = crawsite.genie.init();
    const mList = crawsite.melon.init();
    
    gList;


}


init();