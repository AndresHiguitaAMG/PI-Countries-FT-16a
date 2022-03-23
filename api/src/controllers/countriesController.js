const { Activity, Country, Op } = require('../db');
const responseAPI = require('../utils/index');  


const getAllCountries = async (req, res, next) => {
    try {
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
