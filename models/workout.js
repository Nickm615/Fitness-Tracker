const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Please enter exercise type"
    },
    name: {
        type: String,
        trim: true,
        required: "Please enter exercise name"
    },
    duration: {
        type: Number,
        required: "Please enter the duration of this exercise"
    },
    weight: {
        type: Number
    },
    reps: {
        type: Number,
        required: "Please enter number of reps"
    },
    sets: {
        type: Number,
        required: "Please enter number of sets"
    }

});

const Workout = mongoose.model("Workoug", workoutSchema)

module.exports = Workout