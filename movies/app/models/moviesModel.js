const client = require('../../config/dbConnection');

module.exports = class MovieModel{
    static async getAllMovies(){
        console.log('[getallmovies]');
        const result = await client.db("dsw").collection("movies").find();
        const movies = await result.toArray();
        console.log(movies);
        return movies;
    }
    static async addMovie(data){
        console.log(`[Movie Model - Add Movie] ${data}`);
        try {
            const newMovie = {name: data.name, director: data.director, link:data.link}
            const addedMovie = await 
            client.db("dsw").collection("movies").insertOne(newMovie);
            console.log(`New Movie inserted with following id ${addedMovies.insertedId}`);
            return addedMovie;
        } catch (error) {
            console.log(`[movieService] Error: ${error}`);
        }
    }
}