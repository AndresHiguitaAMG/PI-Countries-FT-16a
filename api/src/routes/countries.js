const { getAllCountries, getCiuntriesById } = require('../controllers/countriesController');
const router = require('express').Router();

router.get("/", getAllCountries);
router.get("/:id", getCiuntriesById);

module.exports = router;
