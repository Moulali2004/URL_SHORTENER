const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({
    shortUrl: {
        type: String,
        require: true,
        unique: true,
    },
    redirectUrl: {
        type: String,
        require: true,    
    },
    clickHistory: [{ timestamp: {type: Number} }],
    },
    {timestamp : true},
);

const  URL = mongoose.model('url', urlSchema);


module.exports = URL;
