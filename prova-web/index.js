const app = require("./config/server");
const routes = require('./app/routes/routes');


routes.addPetition(app);
routes.getAllPetition(app);
routes.apiGetOnePetition(app);