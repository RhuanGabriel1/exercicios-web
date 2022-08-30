const { home } = require('../controllers/home');
const { addPaintingController } = require('../controllers/home');
const { tarsila } = require('../controllers/tarsila');
const { portinari } = require('../controllers/portinari');
const {check, validationResult} = require('express-validator');

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
    insertPainting: (app) => {
        app.get('/inserirobra', function (req, res) {
          res.render('insertPainting.ejs', {errors: {}, painting: {}});
        });
      },
      savePainting: (app) => {
        app.post('/obra/salvar', [
            check('nome').isLength({min:1, max:100}).withMessage('Nome deve ter no mínimo 5 caracteres'),
            check('ano').isLength({min:0, max:2100}).isNumeric().withMessage('Ano deve ser numérico e conter 4 números'),
            check('artista').isLength({min:1, max:100}).withMessage('Artista deve ter no mínimo 5 caracteres'),
            check('urlimagem').isURL().withMessage('URL da imagem deve conter um link')
        ],(req,res) => {
            const err = validationResult(req);
            let painting = req.body;
            if (!err.isEmpty()) {
                let errors = err.array();
                res.render('insertPainting.ejs', {painting: painting, errors: errors});
                return;
            }
          addPaintingController(app, req, res); //Novo controller
        });
      }
}