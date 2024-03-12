const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    foodName: {
        type: String,
        required: false,
    },
    lastAteDate: {
        type: Number,
        required: false,
    },
});

const Food = mongoose.model("Food232234", FoodSchema)

module.exports = Food