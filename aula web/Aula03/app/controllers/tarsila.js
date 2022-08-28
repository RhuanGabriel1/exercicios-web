const dbConnection = require('../../config/dbConnection')
const { getPaintings } = require('../models/tarsila')

module.exports.tarsila = (app, req, res) => {
    console.log('[Controller Home]');
    const db = dbConnection();
    getPaintings(db, (error,result) =>{
        console.log(result, error);
        res.render('tarsila.ejs', {paintings: result});
    })
}