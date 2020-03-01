const MELON = "https://www.melon.com/chart/index.htm"; 
const GENIE = "https://www.genie.co.kr/chart/top200";
const moment = require('moment');

// 지니는 중간에 날짜를 넣어야한다
const genie = (config) => {
    
    let page = 1;
    if(config && config.page) {
        page = config.page;
    }
    const date = moment().format('YYYYMMDD');
    const url = `${GENIE}??ditc=D&ymd=${date}&hh=09&rtm=Y&pg=${page}`;
    return url;
}
module.exports = {
    MELON,
    getGenie: (config) => genie(config)
}
