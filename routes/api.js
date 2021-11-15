const router = require("express").Router();
const Workout = require('../models/Workout.js');

//GET last workout (getLastWorkout())
router.get("/api/workouts/range", (req, res)=>{
    Workout.aggregate([
        {
          $addFields: {
            "totalDuration": { $sum: "$exercises.duration"}
          }
        }
      ])
      .then(data =>{
        res.json(data)
      })
        
      
// console.log('Field added')
})

router.get("/api/workouts", (req, res) => {
Workout.aggregate([{
$addFields:{totalDuration: { $sum: "$exercises.duration"}}
},
{$sort: {day: -1}},
{$limit: 1}
])
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});
module.exports = router
