const app = require('../../config/server');
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
    },
    deletePetitionByid: (app) =>{
        app.delete('/api/petitions/:id', Petition.deletePetitionById);
    },
    updatePetitionById: (app) =>{
        app.put('/api/petitions/:id', Petition.updatePetitionById);
    }
}