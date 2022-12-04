const client = require('../../config/dbConnection');
const {ObjectId} = require('mongodb');

module.exports = class PetitionModel{

    static async getAllPetition(){
        console.log("Get ALL Petition");
        const result = await client.db("prova").collection("peticoes").find();
        const petitions = await result.toArray();
        console.log(petitions);
        return petitions;
    }

    static async getOnePetitionById(Id){
        console.log(`Get One Petition by: ${Id}`);
        Id = new ObjectId(Id);
        const petition = await client.db("prova").collection("peticoes").findOne({_id:Id});
        console.log(petition);
        return petition;
    }

    static async addPetition(data){
        console.log(`Add Petition => ${data}`);
        try{
            const newPetition = {titulo: data.titulo, descricao: data.descricao, usuario: data.usuario, 
                dataCriacao: data.dataCriacao, listaAssinantes: data.listaAssinantes, foto: data.foto }
            const addedPetition = await client.db("prova").collection("peticoes").insertOne(newPetition);
            console.log(`Nova petição inserida com o id: ${addedPetition.insertedId}`);
            return addedPetition;
        }catch(error){
            console.log(`[POST PETITION ERROR: ${error}]`);
        }
    }

    static async deletePetitionById(Id){
        console.log(`DELETE Petition by:  ${Id}`);
        Id = new ObjectId(Id);
        try {
            client.db("prova").collection("peticoes").deleteOne({_id:Id});
            console.log("Deletado com sucesso");
        } catch (error) {
            console.log(`[DELETE PETITION ERROR: ${error}]`);
        }
    }

    static async updatePetitionById(Id){
        console.log(`PUT Petition by: ${Id}`);
        Id = new ObjectId(Id);
        try {
            
        } catch (error) {
            console.log(`PUT PETITION ERROR: ${error}`);
        }
    }

}
