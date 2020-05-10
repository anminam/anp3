const MELON = "https://www.melon.com/chart/index.htm"; 
const GENIE = "https://www.genie.co.kr/chart/top200";
const FLO = "https://www.music-flo.com/browse";
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

const flo = (config) => {
    let url = FLO;
    const date = new Date().getTime()
    url = `https://www.music-flo.com/api/meta/v1/chart/track/1?size=100&timestamp=${date}`
    return url;

}
module.exports = {
    MELON,
    getGenie: (config) => genie(config),
    getFlo:  (config) => flo(config),
}
