const app = require("./config/server");
const routes = require("./app/routes/routes");

routes.home(app);
routes.tarsila(app);
routes.portinari(app);
routes.insertPainting(app);
routes.savePainting(app);
routes.showPainting(app);

