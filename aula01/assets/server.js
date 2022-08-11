let http = require('http');

let port = 3000;
let server = http.createServer(function(req, res){
    let pagina = "";
    let rota = req.url;
    let urlNoBackSlash = rota.split('/?&');
    console.log(urlNoBackSlash);
    // let urlNoQuestionPoint = urlNoBackSlash.;
    // console.log(urlNoQuestionPoint);

    res.end(pagina);
});

server.listen(port);
console.log("Servidor escutando na porta: ", port);