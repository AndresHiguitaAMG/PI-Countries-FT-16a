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
      countries.map(async pr => {
        await newActivity.addCountries(await Country.findByPk(pr));
      });
      return res.json(newActivity);
    } catch (error) {
      next (error);
    };
  };

module.exports = postActivities;