const router = require("express").Router();
const Workout = require('../models/Workout.js');




router.get("/workouts/range", (req, res)=>{

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

router.post('/workouts', (req, res)=>{
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

router.get("/workouts", (req, res) => {
  console.log('hi')
Workout.aggregate([{
$addFields:{totalDuration: { $sum: "$exercises.duration"}}
},
{$sort: {day: -1}},
{$limit: 1}
])
    .then(data => {
      res.json(data[data.length-1]);
      console.log(data[data.length-1])
    })
    .catch(err => {
      res.json(err);
    });
});
module.exports = router
