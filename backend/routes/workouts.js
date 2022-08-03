const express = require("express");
const router = express.Router();

const {getWorkouts,getWorkout,createWorkout,deleteWorkout,updateWorkout} = require('../controller/WorkoutController');

//get all workout
router.get("/",getWorkouts)
//get single workout
router.get("/:id",getWorkout);
//create workout
router.post("/",createWorkout);
//delete workout
router.delete("/:id",deleteWorkout);
//update workout
router.patch("/:id",updateWorkout);

module.exports = router;
