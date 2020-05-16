const cheerio = require("cheerio");

const {getFlo} = require('./siteUrl');
const { getShortSong, getHtml } = require('../../../utils');

const init = (config) => {
    let resultList = [];

    return getHtml(getFlo({page:1}))
        .then(html => {
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
    const $list = html.data.trackList;

    $list.map((item, index) => {
        const song = item.name;
        resultList[index] = {
            rank: index + 1,
            song,
            shortSong: getShortSong(song),
            singer: item.artistList[0].name
        };
    });

    return resultList;
}

module.exports = {
    init
}