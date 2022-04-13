const { Activity, Country } = require('../db');

//Mi función para crear una nueva actividad
const postActivities = async (req, res, next) => {
    try {
      const { name, difficulty, duration, season, countries  } = req.body
      const newActivity = await Activity.create({
        name,
        difficulty,
        duration,
        season,
      });
      console.log(countries);
      countries.forEach(async c => {
        const countriesIn = await Country.findAll({
          where: {
            name: c
          }
        });
        console.log(countriesIn);
        newActivity.addCountry(countriesIn)
      }) 

      return res.json(newActivity);
    } catch (error) {
      next (error);
    };
  };

  const getAcitivities = async (req, res, next) => {
    try {
      const showActivities = await Activity.findAll({
        include: {
          model: Country,
          attributes: ["name", "id"],
          through: {
              attributes: []
          }
        }
      })
      console.log(showActivities);
      return res.json(showActivities)
    } catch (error) {
      next (error);
    }
  }

module.exports = {
  postActivities,
  getAcitivities
};