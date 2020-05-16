import {start} from '../lib/crawsite';


const init = async () => {
    try {
        return await start();
    } catch(e) {
        console.log(e);
    }
}

init();