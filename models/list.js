const mongoose = require('mongoose');

var listSchema = new mongoose.Schema({
    nickname: {
        type: String,
        required: true,
        unique: false,
    },
    sentence: {
        type: String,
        required: true,
    },
    Uni_num: {
        type: Number,
        required: false,
    },
});
module.exports = mongoose.model('Lists', listSchema);
