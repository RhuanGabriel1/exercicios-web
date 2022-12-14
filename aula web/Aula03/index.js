const app = require("./config/server");
const routes = require("./app/routes/routes");
const userRoutes = require("./app/routes/userRoutes");

routes.home(app);
routes.tarsila(app);
routes.portinari(app);
routes.insertPainting(app);
routes.savePainting(app);
routes.showPainting(app);
routes.showErrors(app);
userRoutes.insertUsers(app);
userRoutes.saveUsers(app);

