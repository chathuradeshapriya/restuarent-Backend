const mongoose = require('mongoose');

var Notice = mongoose.model('Notice', {
    course: { type: String },
    date: { type: String },
    notice: { type: String }
});

module.exports = { Notice };