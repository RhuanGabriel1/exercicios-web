let http = require('http');

let port = 3000;
let server = http.createServer(function(req, res){
    let pagina = "";
    // let pagina = "<html><head><meta charset = 'UTF-8'><body><p>teste</p></body></html>";
    let rota = req.url;
    console.log(rota);

if(rota === '/'){
    pagina = "<html><head><meta charset = 'UTF-8'><body><p>Estou na rota principal</p></body></html>";
}
else if(rota === '/notas'){
    pagina = "<html><head><meta charset = 'UTF-8'><body><p>Estou na rota notas</p></body></html>";
}
else if(rota === '/slides'){
    pagina = "<html><head><meta charset = 'UTF-8'><body><p>Estou na rota dos slides</p></body></html>";
}
else{
    pagina = "<html><head><meta charset = 'UTF-8'><body><p>Rota não encontrada</p></body></html>";
}

    res.end(pagina);
});

server.listen(port);
console.log("Servidor escutando na porta: ", port);