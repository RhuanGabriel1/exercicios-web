const dbConnection = require('../../config/dbConnection')
const { getPaintings } = require('../models/home')
const { addPainting } = require('../models/home')

module.exports.home = (app, req, res) => {
    console.log('[Controller Home]');
    const db = dbConnection();
    getPaintings(db, (error,result) =>{
        console.log(result, error);
        res.render('home.ejs', {paintings: result});
    })
}

module.exports.addPaintingController = (app, req, res) => {
    console.log('[Controller Home Add Painting]');
    let painting = req.body;
    console.log(painting);
    dbConn = dbConnection();
    addPainting(painting, dbConn, (error, result) => {
      res.redirect('/');
    });
}