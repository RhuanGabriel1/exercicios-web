const Movie = require('../models/moviesModel');

module.exports = class Movies{
    static async apiGetAllMovies (req, res , next){
        console.log('Controller Movies - get movies');
        try{
            const movies = await Movie.getAllMovies();
            if(!movies){
                res.status(400).json('Não existe filme cadastrado.')
                return;
            }
            // movies.forEach(movie => )
            res.json(movies);
        }catch(error){
            console.log('[getallmovies error] ${error}');
            res.status(500).json({error:error})
        }   
    }

    static async addMovie(req, res, next){
        console.log('[Add Movie Controller]', req.body);
        try {
            const addedMovie = await Movie.addMovie(req.body);
            res.status(200).json(addedMovie);
        } catch (error) {
            res.status(500).json({error:error})
        }
    }
}