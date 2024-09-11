const express = require('express');
const {handleGeneratingShortUrl, handleGetAnalytics} = require("../controllers/url");

const router = express.Router();

router.post("/", handleGeneratingShortUrl);
router.get("/analytics/:id", handleGetAnalytics);

module.exports = router;