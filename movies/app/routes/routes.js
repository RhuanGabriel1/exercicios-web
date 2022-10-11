const Movies = require('../controllers/moviesController');

module.exports = {
    getMovies: (app) =>{
        app.get('/api/filmes', Movies.apiGetAllMovies);
    
    }
}