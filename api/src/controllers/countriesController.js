const { Activity, Country, Op } = require('../db');
const responseAPI = require('../utils/index');  


const getAllCountries = async (req, res, next) => {
    try {
        const myInformationDb = await responseAPI();
        // await Country.findAll({
            
        //     attributes: ["continent", "flag"],
        //     // through: {
        //         //     attributes: []
        //         // } 
                
        //         // where: {
        //             //   name: {
        //                 //     [Op.iLike]: `%${name}%`,
        //                 //   }
        //                 // }
        //             });
                    console.log(myInformationDb);
          return res.json(myInformationDb)
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
