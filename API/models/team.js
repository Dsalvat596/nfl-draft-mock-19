const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let teamSchema = new Schema({
    name: {
        type: String
    },
    city: {
        type: String
    },
    draft_picks: {
        type: String
    }
}, {
    collection: 'teams'
});

module.exports = mongoose.model('team', teamSchema);