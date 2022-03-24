const { Activity, Country, Op } = require('../db'); 


const getAllCountries = async (req, res, next) => {
    try {
        const { name } = req.query;
        let allData = [];
        if (name) {
            const responseByName = await Country.findAll({
                attributes: ["flag", "name", "continent"],
                through: {
                    attributes: []
                },
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    }
                }
            });
            allData = responseByName;
        } else {
            const myInformationDb = await Country.findAll({
                attributes: ["flag", "name", "continent"],
                through: {
                    attributes: []
                },
            });
            allData = myInformationDb;
        }
        if (allData.length === 0) {
            return res.status(404).json({message: "Not Found"});
        }
        return res.json(allData);
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
