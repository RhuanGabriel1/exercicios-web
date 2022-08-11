let http = require('http');

let port = 3000;
let server = http.createServer(function(req, res){
    let pagina = "";
    let rota = req.url;
    let urlNoBackSlash = rota.replace("/?", "");
    urlNoBackSlash = urlNoBackSlash.replace("/favicon", "");
    urlNoBackSlash = urlNoBackSlash.replace(".ico", "");
    urlNoBackSlash = urlNoBackSlash.replace("+", " ");
    urlNoBackSlash = urlNoBackSlash.replace("&", ", ");
    pagina = "<html><head><meta charset = 'UTF-8'><body><p>"+ urlNoBackSlash +"</p></body></html>";
    res.end(pagina);
});


server.listen(port);
console.log("Servidor escutando na porta: ", port);