const dbConnection = require('../../config/dbConnection')
const { getPaintings } = require('../models/home')

module.exports.home = (app, req, res) => {
    console.log('[Controller Home]');
    const db = dbConnection();
    getPaintings(db, (error,result) =>{
        console.log(result, error);
        res.render('home.ejs', {paintings: result});
    })
}