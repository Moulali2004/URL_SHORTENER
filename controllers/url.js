const shortid = require("shortid");
const URL = require("../models/url");


async function handleGeneratingShortUrl(req, res) {
    const body = req.body;
    if(!body.url) return res.status(400).json({ error:'Url is required'});
    const id = shortid(8);
    await URL.create({
        shortUrl: id,
        redirectUrl: body.url,
        clickHistory: [],
    })

    return res.json({shord: id});
}

async function handleGetAnalytics(req, res) {
    const shortid = req.params.id;
    const result = await URL.findOne({shortUrl: shortid});
    return res.json({ totalClicks: result.clickHistory.length,
        Analytics: result.clickHistory,
    });

}

module.exports = {
    handleGeneratingShortUrl,
    handleGetAnalytics,
}