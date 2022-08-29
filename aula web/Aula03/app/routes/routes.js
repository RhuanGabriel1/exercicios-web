const { home } = require('../controllers/home');
const { tarsila } = require('../controllers/tarsila');
const { portinari } = require('../controllers/portinari');

module.exports ={
    home: (app) => {
        app.get('/', (req, res) => {
            //res.render("home.ejs");
            home(app, req, res);
        });
    },

    tarsila: (app) =>{

        app.get('/tarsila', (req, res) => {
            tarsila(app, req, res);
        });
    },

    portinari: (app) =>{
        app.get('/portinari', (req, res) => {
            portinari(app, req, res);
            
        });
    },
    insertingPainting : (app) =>{
        app.get('/inserirobra', (req, res) =>{
            res.render('insertPainting.ejs');
        })
    },
    
    savePainting : (app) =>{
        app.post('/obra/salvar', (req, res) =>{
          console.log('[Rota salvar obra]');
          let painting = req.body;
          console.log(painting);
        })
    }
}