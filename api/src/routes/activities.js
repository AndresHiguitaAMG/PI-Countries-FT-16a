const router = require('express').Router();
const { postActivities, getAcitivities } = require('../controllers/activitiesController');

router.post("/create", postActivities);
router.get("/", getAcitivities);

module.exports = router;

