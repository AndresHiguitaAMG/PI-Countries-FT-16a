const { getAllCountries, getCountriesById } = require('../controllers/countriesController');
const router = require('express').Router();

router.get("/", getAllCountries);
router.get("/:id", getCountriesById);

module.exports = router;
