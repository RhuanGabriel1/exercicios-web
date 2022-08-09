let http = require('http');

let port = 3000;
let server = http.createServer(function(req, res){
    let pagina = "";
    let rota = req.url;
    let url = rota.split('/');
    console.log(url);
    res.end(pagina);

    console.log();

});

server.listen(port);
console.log("Servidor escutando na porta: ", port);