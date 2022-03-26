const { Activity, Country, Op } = require('../db');


const getAllCountries = async (req, res, next) => {
    try {
        const { name } = req.query;
        let allData = [];
        if (name) {
            const responseByName = await Country.findAll({
                attributes: ["flag", "name", "continent", "id"],
                through: {
                    attributes: ["id", "name", "difficulty", "duration", "season"]
                },
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    }
                },
                include: {
                    model: Activity,
                    attributes: ["id", "name", "difficulty", "duration", "season"],
                    through: {
                        attributes: []
                    }
                }
            });
            allData = responseByName;
        } else {
            const myInformationDb = await Country.findAll({
                attributes: ["flag", "name", "continent", "id"],
                through: {
                    attributes: []
                },
                include: {
                    model: Activity,
                    attributes: ["id", "name", "difficulty", "duration", "season"],
                    through: {
                        attributes: []
                    }
                }
            });
            allData = myInformationDb;
        }
        if (allData.length === 0) {
            return res.status(404).json({message: "Not found"});
        }
        return res.json(allData);
    } catch (error) {
        next (error);
    };
};

const getCountriesById = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (id) {
            const dB = await Country.findOne({
                where: {
                    id: {
                        [Op.iLike]: `%${id}%`
                    }
                },
                include: {
                    model: Activity,
                    attributes: ["id", "name", "difficulty", "duration", "season"],
                    through: {
                        attributes: []
                    }
                }
            });
            const countriesbyId = {
                id: dB.id,
                flag: dB.flag,
                name: dB.name,
                continent: dB.continent,
                capital: dB.capital,
                subregión: dB.subregión,
                area: dB.area,
                population: dB.population
            }
            if (!dB) {
                return res.status(404).json({message: "Not Found"});
            }
            return res.json(countriesbyId);
        }
    } catch (error) {
        next (error);
    };
};

module.exports = {
    getAllCountries,
    getCountriesById,
};
