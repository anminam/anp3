const {MELON} = require('./siteUrl');
const cheerio = require("cheerio");
const getHtml = require("../getHtml");


const init = () => {
    return getHtml(MELON)
        .then(html => {
            const $ = cheerio.load(html.data);
            const $list = $('#tb_list table tbody > tr');
            const resultList = [];
            $list.map((i, el) => {
                const $el = $(el);
                resultList[i] = {
                    link: $el.find('.rank').text(),
                    song: $el.find('.wrap_song_info .rank01 a').attr('title').replace('재생','').trim(),
                    singer : $el.find('.wrap_song_info .rank02 a').attr('title').replace('- 페이지 이동','').trim(),

                } 
            });
            return resultList;
        }).then(json => {
            console.table(json);
            return json;
        });
}

module.exports = {
    init
}