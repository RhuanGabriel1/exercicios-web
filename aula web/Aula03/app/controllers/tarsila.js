const dbConnection = require('../../config/dbConnection')
const { getPaintings } = require('../models/tarsila')
const  logger  = require('../logger/winston');

module.exports.tarsila = (app, req, res) => {
    console.log('[Controller Home]');
    const db = dbConnection();
    getPaintings(db, (error,result) =>{
        if(error){
            logger.log({
                level: 'error',
                message: error.message
            });
            res.render("error.ejs")
        }else{
            res.render('tarsila.ejs', {paintings: result});
        }
    })
}