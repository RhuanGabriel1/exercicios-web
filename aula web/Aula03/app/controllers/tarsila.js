const dbConnection = require('../../config/dbConnection')
const { getPaintings } = require('../models/tarsila')
const  logger  = require('../logger/winston');

module.exports.tarsila = (app, req, res) => {
    console.log('[Controller Home]');
    const db = dbConnection();
    getPaintings(db, (error,result) =>{
        if(error){
            if(error.errno == 1045){
                error.code = "Problemas no acesso ao banco";
                console.log(error);
            logger.log({
                level: 'error',
                message: error.message
            });
            res.render("error.ejs", {erro: error})
        }

        }else{
            res.render('tarsila.ejs', {paintings: result});
        }
    })
}