const {getAllPetition, addPetition, apiGetOnePetition} = require('../controllers/petitionController');
const Petition = require('../controllers/petitionController');

module.exports = {
    getAllPetition: (app) =>{
        app.get('/api/petitions', Petition.apiGetAllPetition);
    },
    addPetition: (app) =>{
        app.post('/api/petitions', Petition.addPetition);
    },
    apiGetOnePetition: (app) =>{
        app.get('/api/petitions/:id', Petition.apiGetOnePetition);
    }
}