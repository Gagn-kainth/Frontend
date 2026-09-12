const mongoose = require ('mongoose');

const groundSchema = new mongoose.Schema({  
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,       
        required: true
    },
    pricePerHour: {
        type: Number,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    image: {
        type: String,
        required: true
    }
},
{timestamps: true}
);

module.exports = mongoose.model('Ground', groundSchema);
