const { home } = require('../controllers/home');
const { addPaintingController } = require('../controllers/home');
const { tarsila } = require('../controllers/tarsila');
const { portinari } = require('../controllers/portinari');
const {check, validationResult} = require('express-validator');
const {obra} = require('../controllers/obra');

module.exports ={
    home: (app) => {
        app.get('/', (req, res) => {
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
    showPainting: (app) =>{
        app.get('/obradearte', (req, res) => {
            console.log("Chegou na rota");
            // let id = req.params.idobra;
            obra(app, req, res);
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
            check('ano').isLength({min:0, max:4}).isNumeric().withMessage('Ano deve ser numérico e conter 4 números'),
            check('artista').isLength({min:1, max:100}).withMessage('Artista deve ter no mínimo 5 caracteres'),
            check('urlimagem').isURL().withMessage('URL da imagem deve conter um link'),
            check('descricao').isLength({min:1, max:250}).withMessage('Não pode ser nulo ou valor maximo atingido(250)'),
        ],(req,res) => {
            console.log('rotaSalvar');
            const err = validationResult(req);
            let painting = req.body;
            if (!err.isEmpty()) {
                console.log('entrou no if');
                let errors = err.array();
                res.render('insertPainting.ejs', {painting: painting, errors: errors});
                return
            }
          addPaintingController(app, req, res); //Novo controller
        });
      },

      
}