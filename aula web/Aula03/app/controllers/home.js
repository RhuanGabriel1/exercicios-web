const dbConnection = require('../../config/dbConnection')
const { getPaintings } = require('../models/home')
const { addPainting } = require('../models/home')
const  logger  = require('../logger/winston');

module.exports.home = (app, req, res) => {
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
            res.render('home.ejs', {paintings: result});
        }
    })
}

module.exports.addPaintingController = (app, req, res) => {
    console.log('[Controller Home Add Painting]');
    let painting = req.body;
    dbConn = dbConnection();
    addPainting(painting, dbConn, (error, result) => {
        if(error){
            logger.log({
                level: 'error',
                message: error.message
            });
            res.render("error.ejs")
        }else{
            res.redirect('/');
        }
    });
}