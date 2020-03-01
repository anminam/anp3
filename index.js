const crawsite = require('./lib/crawsite');
const {findObj} = require('./utils');


const init = async () => {

    const mList = await crawsite.melon.init();
    const gList = await crawsite.genie.init();
    const fList = await crawsite.flo.init();
    
    calc([
        mList,
        gList,
        fList
    ]);

}

const calc = (apps) => {
    const arr = [];

    // 사이트에서 가저온 음악 한곳에 넣기
    apps.forEach(item => {
        addSong(arr, item);    
    });

    // 랭크 먹이기
    arr.forEach((item,index) => {
        apps.forEach(site => {
            const songObj = findObj(site, 'shortSong', item.shortSong);
            if (songObj) {
                item.ranks.push(songObj.rank);
            } else {
                item.ranks.push('킹리적 갓심');
            }
        });
    });

    var newTable = [];
    
    console.table([arr.song, arr.singger, arr.ranks])
}

const addSong = (arr, list) => {

    list.forEach(item => {
        const song = item.shortSong;
        if (!findObj(arr, 'shortSong',song)) {

            arr.push({
                song: item.song,
                shortSong: song,
                singger: item.singer,
                ranks: []
            });
        }
    });

    return arr;
}


init();