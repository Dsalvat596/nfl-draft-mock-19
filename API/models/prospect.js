const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let prospectSchema = new Schema({
    ovr_rank: {
        type: Number
    },
    last_name: {
        type: String
    },
    first_name: {
        type: String
    },
    position: {
    type: String
    },
    school: {
        type: String
    },
    year: {
        type: String
    },
    height: {
        type: String
    },
    weight: {
        type: Number
    },
    pos_rank : {
        type: Number
    }
}, {
    collection: 'prospects'
});

module.exports = mongoose.model('Prospect', prospectSchema);