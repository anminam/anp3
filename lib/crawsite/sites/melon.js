const cheerio = require("cheerio");

const { MELON } = require('./siteUrl');
const { getShortSong, getHtml } = require('../../../utils');


const init = (config) => {
    let resultList = [];

    return getHtml(MELON)
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
    const $list = $('#tb_list table tbody > tr');
    $list.map((i, el) => {
        
        const $el = $(el);
        const song = $el.find('.wrap_song_info .rank01 a').attr('title').replace('재생','').trim();

        resultList[i] = {
            rank: $el.find('.rank').text(),
            song,
            shortSong: getShortSong(song),
            singer : $el.find('.wrap_song_info .rank02 a').attr('title').replace('- 페이지 이동','').trim(),
        };
    });

    return resultList;
}

module.exports = {
    init
}