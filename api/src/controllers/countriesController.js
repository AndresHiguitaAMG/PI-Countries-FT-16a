const { Activity, Country, Op } = require('../db');

//Mi función para traerme todos los paises y también para traermelos por nombre
const getAllCountries = async (req, res, next) => {
    try {
        let { name } = req.query;
        let allData = [];
        if (name) {
            const responseByName = await Country.findAll({
                attributes: ["flag", "name", "continent", "id", "population", "area"],
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
                attributes: ["flag", "name", "continent", "id", "population", "area"],
                through: {
                    attributes: []
                }, 
                include: {
                    model: Activity,
                    attributes: ["name", "id"],
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

//Mi función para traerme los paises por id
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
        console.log(DBCountries);
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
