const client = require('../../config/dbConnection');

module.exports = class MovieModel{
    static async getAllMovies(){
        console.log('[getallmovies]');
        const result = await client.db("dsw").collection("movies").findOne();
        console.log(result);
        return result;
    }
}