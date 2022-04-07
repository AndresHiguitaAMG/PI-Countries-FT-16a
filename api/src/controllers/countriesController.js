const { Activity, Country, Op } = require('../db');


const getAllCountries = async (req, res, next) => {
    try {
        let { name } = req.query;
        let allData = [];
        if (name) {
            const responseByName = await Country.findAll({
                attributes: ["flag", "name", "continent", "id", "population"],
                through: {
                    attributes: []
                },
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    }
                }
            });
            allData = responseByName
        } else {
            const myInformationDb = await Country.findAll({
                attributes: ["flag", "name", "continent", "id", "population"],
                through: {
                    attributes: []
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
        const DBCountries = await Country.findAll({
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
        if (!DBCountries.length) {
            return res.status(404).json({message: "Not found"});
        }
        return res.json(DBCountries);
    } catch (error) {
        next (error);
    };
};

module.exports = {
    getAllCountries,
    getCountriesById,
};
