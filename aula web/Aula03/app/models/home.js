module.exports = {
    getPaintings: (dbConnection, callback) => {
        dbConnection.query("select * from obrasdearte;", callback);
    },
}