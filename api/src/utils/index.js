const axios = require('axios');
const { Country } = require('../db');

//Mi función para traerme todos la información de la API
const responseAPI = async () => {
    try {
        const allInformationAPI = (await axios.get("https://restcountries.com/v3/all")).data;
        const myInformation = allInformationAPI.map(async c => {
            const inDb = {
                name: c.name.common,
                flag: c.flags[0],
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