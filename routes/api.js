const router = require("express").Router();
const Workout = require('../models/Workout');




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
        
      

})

router.post('/api/workouts', (req, res)=>{
  console.log(req.body)
  // Workout.findOneAndUpdate({
  //   '_id':req.params.id
  // },
  // {$push:{'exercises':req.body}}, {new: true})
  // .then(data =>{
  //   res.json(data);
  // }).catch(err =>{
  //   res.json(err)
  // })
})

router.get("/api/workouts", (req, res) => {
Workout.aggregate([{
$addFields:{totalDuration: { $sum: "$exercises.duration"}}
},
{$sort: {day: -1}},
{$limit: 1}
])
    .then(data => {
      res.json(data[data.length-1]);
    })
    .catch(err => {
      res.json(err);
    });
});
module.exports = router
