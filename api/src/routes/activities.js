const router = require('express').Router();
const postActivities = require('../controllers/activitiesController');

router.post("/create", postActivities);

module.exports = router;

