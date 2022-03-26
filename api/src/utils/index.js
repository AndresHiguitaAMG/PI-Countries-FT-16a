const axios = require('axios');
const { Country } = require('../db');

const responseAPI = async () => {
    try {
        const allInformationAPI = (await axios.get("https://restcountries.com/v3/all")).data;
        const myInformation = allInformationAPI.map(async c => {
            const inDb = {
                name: c.name.common,
                flag: c.flags[1],
                id: c.cca3,
                continent: c.region,
                capital: c.capital ? c.capital[0] : "Not found",
                subregión: c.subregion,
                area: c.area,
                population: c.population
            };
            Country.findOrCreate({
                where: { id: c.cca3 },
                defaults: inDb
            });
            return inDb;
        });
        return myInformation;
    } catch (error) {
        console.log(error);
    }
}

module.exports = responseAPI;