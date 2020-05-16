const cheerio = require("cheerio");

const {getGenie} = require('./siteUrl');
const {getHtml, getShortSong} = require("../../../utils");

const init = () => {
    let resultList = [];

    return getHtml(getGenie({page:1}))
        .then(html => {
            resultList = [
                ...resultList,
                ...getData(html)
            ];
            return getHtml(getGenie({page:2}));
        }).then(html => {
            resultList = [
                ...resultList,
                ...getData(html)
            ];
            return resultList;
        }).then(json => {
            console.table(json);
            return json;
        }).catch(err => {
            console.log(err);
        });
}

const getData = (html) => {
    const resultList = [];
    const $ = cheerio.load(html);
    const $list = $('.newest-list .list-wrap tbody > tr');

    $list.map((i, el) => {
        const $el = $(el);
        const song = $el.find('.info .title').text().trim();
        
        resultList[i] = {
            rank: $el.find('.number').remove('.rank').text().split('\n')[0],
            song,
            shortSong: getShortSong(song),
            singer: $el.find('.info .artist').text().trim()
        };
    });

    return resultList;
}

module.exports = {
    init
}