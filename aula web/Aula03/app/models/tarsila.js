module.exports = {
    getPaintings: (dbConnection, callback) => {
        dbConnection.query("select * from obrasdearte where artista = 'Tarsila do Amaral' ", callback);
    },
}