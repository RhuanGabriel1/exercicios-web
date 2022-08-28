const dbConnection = require('../../config/dbConnection')
const { getPaintings } = require('../models/portinari')

module.exports.portinari = (app, req, res) => {
    console.log('[Controller Home]');
    const db = dbConnection();
    getPaintings(db, (error,result) =>{
        console.log(result, error);
        res.render('portinari.ejs', {paintings: result});
    })
}