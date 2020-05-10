const {getFlo} = require('./siteUrl');
const cheerio = require("cheerio");
const {getHtml} = require("../../utils");
const {getShortSong} = require('../../utils');

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
        });
}

const getData = (html) => {
    const resultList = [];
    const $ = cheerio.load(html.data);
    const $list = html.data.data.trackList;


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