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
    console.log(urlNoBackSlash);
    res.end(pagina);
    getText();
});

function getText (){
    console.log(urlNoBackSlash);;
} 

server.listen(port);
console.log("Servidor escutando na porta: ", port);