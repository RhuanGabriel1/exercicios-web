const express = require('express');

const app = express();
const port = process.env.PORT ||3000;

app.set("view engine", "ejs");
app.use(express.static('./public'));
app.set('views', './app/views');
app.listen(port, () => {
    console.log("Servidor na porta: ", port);
});

module.exports = app;