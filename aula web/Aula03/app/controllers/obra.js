const dbConnection = require('../../config/dbConnection')
const { getPaintings } = require('../models/obra')
const  logger  = require('../logger/winston');

module.exports.obra = (app, req, res) => {
    console.log('[Controller obra]');
    let id = req.query.idobra
    const db = dbConnection();
    getPaintings(db,id ,(error,result) =>{
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

        }else {
            res.render('obra.ejs', {paintings: result});
        }
    })
}
