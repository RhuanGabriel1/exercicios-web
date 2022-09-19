const { home } = require('../controllers/home');
const { addPaintingController } = require('../controllers/home');
const { tarsila } = require('../controllers/tarsila');
const { portinari } = require('../controllers/portinari');
const {check, validationResult} = require('express-validator');
const {obra} = require('../controllers/obra');
const { error } = require('../controllers/error');


module.exports ={
    insertUsers: (app) => {
        app.get('/inserirusuarios', function (req, res) {
          res.render('insertUsers.ejs', {errors: {}, user: {}});
        });
      },
      saveUsers: (app) => {
        app.post('/salvarusuario', [
            check('email').isEmail().normalizeEmail().withMessage('O email deve ser válido'),
            check('password').isLength({min:5, max:20}).isNumeric().withMessage('Password deve ter no mínimo 5 no máximo 20 caracteres'),
            check('confirmpassword').isLength({min:1, max:100}).custom((value, {req}) =>{
                console.log("Valor: " + value);
                if(value!==req.body.password){
                    throw new Error("As password digitadas deve ser iguais")
                }
                return true;
            }),
        ]
        ,(req,res) => {
            const err = validationResult(req);
            let user = req.body;
            if (!err.isEmpty()) {
                let errors = err.array();
                res.render('insertUsers.ejs', {user: user, errors: errors});
                return
            }
          addPaintingController(app, req, res); //Novo controller
        });
      },

}