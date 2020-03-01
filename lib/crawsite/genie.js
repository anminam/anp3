const {GENIE} = require('./siteUrl');
const cheerio = require("cheerio");
const getHtml = require("../getHtml");


const init = () => {

    return getHtml(GENIE)
        .then(html => {
            const $ = cheerio.load(html.data);
            const $list = $('.newest-list .list-wrap tbody > tr');
            const resultList = [];
            $list.map((i, el) => {
                const $el = $(el);
                resultList[i] = {
                    link: $el.find('.number').remove('.rank').text().split('\n')[0],
                    song: $el.find('.info .title').text().trim(),
                    singer: $el.find('.info .artist').text().trim()
                } 
            });
            return resultList;
            
        }).then(json => {
            console.table(json);
            return json
        });
}

module.exports = {
    init
}