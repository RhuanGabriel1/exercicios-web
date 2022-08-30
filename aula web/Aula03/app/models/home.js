module.exports = {
    getPaintings: (dbConnection, callback) => {
        dbConnection.query("select * from obrasdearte;", callback);
    },

    addPainting: (painting, dbConnection, callback) => {
        sql = `insert into obrasdearte (nome, artista, ano, urlimagem, descricao) VALUES ("${painting.nome}", "${painting.artista}", ${painting.ano}, "${painting.urlimagem}", "${painting.descricao}");`
        console.log(sql);
        dbConnection.query(sql, callback);
    }
}

