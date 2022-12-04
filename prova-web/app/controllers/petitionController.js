const res = require('express/lib/response');
const Joi = require('joi');

const Petition = require('../models/petitionModel');

const schema = Joi.object().keys({
    titulo: Joi.string().required().min(1).max(50),
    descricao: Joi.string().required().min(1).max(50),
    usuario: Joi.string().required().min(1).max(50),
    dataCriacao: Joi.string().required().min(1).max(350),
    listaAssinantes: Joi.string().required().min(1).max(350),
    foto: Joi.string().required().min(1).max(350),
});


module.exports = class Petitions {

    static async apiGetAllPetition (req, res, next){
        console.log("Controller Get Petitions");
        try {
            const petitions = await Petition.getAllPetition();
            if(petitions.length<=0){
                res.status(400).json('Não existe petições cadastradas');
                return;
            }
            res.json(petitions);
        } catch (error) {
            console.log(`GET ALL PETITIONS ERROR: ${error}`);
            res.status(500).json({error:error});
        }
    }

    static async apiGetOnePetition (req, res, next){
        try {
            const id = req.params.id
            console.log("ID: " + id);
            const onePetition = await Petition.getOnePetition(id);
            if(onePetition.length<=0){
                res.status(400).json('Não existe petições cadastradas');
                return;
            }
            res.json(onePetition);
        } catch (error) {
            console.log(`GET ONE PETITION ERROR: ${error}`);
            res.status(500).json({error:error});
        }
    }
    
    static async addPetition (req, res, next){
        console.log(`Controller Post Petition`, req.body);
        const {error, value} = schema.validate(req.body);
        // console.log(`[Controller add Book erro: ] ${value} - ${error.details}`);
        if(error){
            const result = {
                msg:`Campos não foram preenchidos corretamente`,
                error:error.details
            }
            res.status(404).json(result);
            return;
        }
        try {
            const addedPetition = await Petition.addPetition(req.body);
            res.status(200).json(addedPetition);
        } catch (error) {
            res.status(500).json({error:error});
        }
    }

}