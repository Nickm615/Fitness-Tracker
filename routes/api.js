const router = require("express").Router();
const Workout = require('../models/Workout.js');

//GET last workout (getLastWorkout())
router.get("/api/workouts", (req, res) => {
    Workout.findOne({})
        .sort({day: -1})
        .then(dbWorkout => {
            console.log(dbWorkout)
            res.json(dbWorkout)
        });
})

module.exports = router
