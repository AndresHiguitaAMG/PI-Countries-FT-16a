const { Activity, Country } = require('../db');

const postActivities = async (req, res, next) => {
    try {
      const { name, difficulty, duration, season, countries  } = req.body
      const newActivity = await Activity.create({
        name,
        difficulty,
        duration,
        season,
      });
      const countriesIn = await Country.findAll({
        where: {
          name: countries
        }
      });
      console.log(countriesIn);
      newActivity.addCountry(countriesIn)
      return res.json(newActivity);
    } catch (error) {
      next (error);
    };
  };

module.exports = postActivities;