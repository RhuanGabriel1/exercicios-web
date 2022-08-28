module.exports = {
    getPaintings: (dbConnection, callback) => {
        dbConnection.query("select * from obrasdearte where artista = 'Cândido Portinari' ", callback);
    },
}