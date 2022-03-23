const { Activity, Country, Op } = require('../db'); 


const getAllCountries = async (req, res, next) => {
    try {
        const { name } = req.query;
        if (name) {
            const responseByName = await Country.findAll({
                attributes: ["flag", "name", "continent"],
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`,
                    }
                }
            });
            return res.json(responseByName);
        }
        const myInformationDb = await Country.findAll({
            attributes: ["flag", "name", "continent"]
        });
        return res.json(myInformationDb);
    } catch (error) {
        next (error);
    };
};

const getCountriesById = async (req, res, next) => {
    try {
        
    } catch (error) {
        next (error);
    };
};

module.exports = {
    getAllCountries,
    getCountriesById,
};
