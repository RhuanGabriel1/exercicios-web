/*A função acima lê arquivos e folders do folder ./ (folder atual) e lista na tela os nomes.
Transforme a função acima em uma promise que retorna os nomes dos arquivos e folders se a execução for OK 
ou um erro caso algo dê errado na leitura do folder.*/



const p = new Promise((resolve, rejected) => {
//execução de uma operação assíncrona
 //no final teremos um valor ou um erro
     setTimeout(() => {
    
 // resolve(1);
    
    rejected(new Error("Ocorreu um erro na operação assíncrona"));

}, 2000);
});

 p.then((result) => {
     console.log(result);
    console.log("Operação assíncrona efetuada com sucesso");

 }).catch((error) => {
    
 console.log("erro", error.message);
    
 });
