const app = require("./config/server")

app.get('/', function(req, res){
	/*const pagina = '<html><body>Ro ta  Principal</body></html>';
	res.send(pagina);*/
    res.render('home.ejs');
})

app.get('/tarsila', function(req, res){
	/*const pagina = '<html><body>Obras de Tarsila do Amaral</body></html>';
	res.send(pagina);*/
    res.render('tarsila.ejs');
})
app.get('/portinari', function(req, res){
	/*const pagina = '<html><body>Obras de Tarsila do Amaral</body></html>';
	res.send(pagina);*/
    res.render('portinari.ejs');
})