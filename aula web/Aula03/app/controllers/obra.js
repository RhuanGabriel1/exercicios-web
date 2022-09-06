const dbConnection = require('../../config/dbConnection')
const { getPaintings } = require('../models/obra')

module.exports.obra = (app, req, res) => {
    console.log('[Controller obra]');
    const db = dbConnection();
    getPaintings(db, (error,result) =>{
        console.log(result, error);
        res.render('obra.ejs', {paintings: result});
    })
}
