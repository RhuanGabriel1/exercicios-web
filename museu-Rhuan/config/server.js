const express = require("express")
const app = express();


const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.listen(port, function(){
	console.log('Servidor rodando com express na porta', port);
});
module.exports = app;