const router = require('express').Router();
const postActivities = require('../controllers/activitiesController');

router.post("/", postActivities);

module.exports = router;

