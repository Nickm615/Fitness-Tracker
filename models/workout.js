const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exercises: 
        [
            {
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
    
    }],

    day: {
        type: Date,
        required: "Please enter day"
    }
    
});

const Workout = mongoose.model("Workout", workoutSchema)

module.exports = Workout