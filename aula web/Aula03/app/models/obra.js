module.exports = {
    getPaintings: (dbConnection, id, callback) => {
        console.log(id);
        dbConnection.query("select * from obrasdearte where idobra=" + id +";", callback);
    }

    // addPainting: (painting, dbConnection, callback) => {
    //     sql = `insert into obrasdearte (nome, artista, ano, urlimagem, descricao) VALUES ("${painting.nome}", "${painting.artista}", ${painting.ano}, "${painting.urlimagem}", "${painting.descricao}");`
    //     console.log(sql);
    //     dbConnection.query(sql, callback);
    // }
}

