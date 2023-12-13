const { time } = require('console');
const mongoose = require('mongoose');

const ConcertSchema = new mongoose.Schema({
    venueName: { 
        type: String,
        required: [true, "Please enter a venue name."]
    },
    location: { 
        type: String,
        required: [true, "Please enter a location."]
    },
    performanceDate: { 
        type: String,
        required: [true, "Please enter a performance date."],
        get: function (value) {
            return moment(value).format(MM-DD-YYYY);
        }
    },
    concertTime: { type: String },
    description: { type: String },
    // email: { type: String },
    // password: { 
    //     type: String, 
    //     minLength: [8, "Password must contain at least 8 characters."]
    // },
    artistName: { 
        type: String,
        required: [true, "Please enter an artist/band name."],
        minLength: [2, "Artist/band name must be at least 2 characters."]
    },
    genre: { 
        type: String,
        required: [true, "Please choose a genre. If none apply, please choose 'Other'."]
    },
}, { timestamps: true });
module.exports = mongoose.model('Concert', ConcertSchema);

