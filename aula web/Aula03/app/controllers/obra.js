const dbConnection = require('../../config/dbConnection')
const { getPaintings } = require('../models/obra')
const  logger  = require('../logger/winston');

module.exports.obra = (app, req, res) => {
    console.log('[Controller obra]');
    let id = req.query.idobra
    const db = dbConnection();
    getPaintings(db,id ,(error,result) =>{
        if(error){
            logger.log({
                level: 'error',
                message: error.message
            });
            res.render("error.ejs")
        }else {
            res.render('obra.ejs', {paintings: result});
        }
    })
}
