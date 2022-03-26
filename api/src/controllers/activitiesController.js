const { Activity, Country, Op } = require('../db');

const postActivities = async (req, res, next) => {
    try {
        const { name, dificulty, duration, season, countries  } = req.body

  const newActivity = await Activity.create({
    name,
    dificulty,
    duration,
    season,
  });
  countries.map(async pr => {
    await newActivity.setCountries(await Country.findByPk(pr));
  });
  return res.json(newActivity);
    } catch (error) {
        next (error); 
    };
};

module.exports = postActivities;