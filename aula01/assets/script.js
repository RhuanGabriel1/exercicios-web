const  form  = document.getElementById("form");
const  selectPais  = document.getElementById("pais");
const  selectEstado  = document.getElementById("estado");
const  selectCidade  = document.getElementById("cidade");
const  inputBairro  = document.getElementById("bairro");
const  inputRua  = document.getElementById("rua");
const  inputNascimento  = document.getElementById("nascimento");
const  inputNome  = document.getElementById("nome");
const  inputSubmit  = document.getElementById("enviar");

const buscarEstados = (e) =>{
    const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome";
    fetch(url).then(response => response.json())
        .then((json) =>{
            console.log(json);
            for(let i=0; i < json.length; i++){
                const option = document.createElement("option");
                option.value = json[i].id;
                const texto = document.createTextNode(json[i].nome);
                option.appendChild(texto);
                selectEstado.appendChild(option);
            }
        });
}

const buscarPaises = (e) =>{
    const url = "https://servicodados.ibge.gov.br/api/v1/localidades/paises";
    fetch(url).then(response => response.json())
        .then((json) =>{
            console.log(json);
            for(let i=0; i < json.length; i++){
                const option = document.createElement("option");
                option.value = json[i].id;
                const texto = document.createTextNode(json[i].nome);
                option.appendChild(texto);
                selectPais.appendChild(option);
            }
        });
}

const buscarCidades = (e) =>{
    const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios?orderBy=nome"
    
}

buscarEstados();
buscarPaises();
buscarCidades();