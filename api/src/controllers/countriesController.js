const { Activity, Country } = require('../db');
const axios = require('axios');

const getAllCountries = async (req, res, next) => {
    try {
        
    } catch (error) {
        next (error);
    };
};

const getCiuntriesById = async (req, res, next) => {
    try {
        
    } catch (error) {
        next (error);
    };
};

const responseAPI = async () => {
    try {
      const allInformationAPI = (await axios.get("https://restcountries.com/v3/all")).data;
      const countries = allInformationAPI.map(c => {
        return {
          flag: c.flag,
          name: c.name.common,
        };
      });
      await Country.bulkCreate({countries})
    } catch (error) {
      console.log(error);
    }
  }

module.exports = {
    getAllCountries,
    getCiuntriesById,
    responseAPI
};
