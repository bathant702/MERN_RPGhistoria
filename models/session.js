const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
    name: { type: String,
        required: true},
    dateCreated: { type: Number,
        default: function() {
        return new Date().getFullYear();
        },
        min: 1927},
    dungeonMaster: { type: String, ref:"Dungeon master please."},
    gameState: { type: String,
        enum: ['Active','Ongoing','Ended']},
    description: [{ type: String, ref: 'General synopsis of the story.',}],
})

module.exports = mongoose.model('Session', sessionSchema);