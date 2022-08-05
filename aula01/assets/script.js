const form = document.getElementById("form");
const selectPais = document.getElementById("pais");
const selectEstado = document.getElementById("estado");
const selectCidade = document.getElementById("cidade");
const inputBairro = document.getElementById("bairro");
const inputRua = document.getElementById("rua");
const button = document.getElementById("enviar");

const buscarPaises = (e) => {
    const url = "https://servicodados.ibge.gov.br/api/v1/localidades/paises";
    fetch(url).then(response => response.json())
        .then((json) => {
            for (let i = 0; i < json.length; i++) {
                const option = document.createElement("option");
                option.value = json[i].id;
                const texto = document.createTextNode(json[i].nome);
                option.appendChild(texto);
                selectPais.appendChild(option);
            }
        });
}
const buscarEstados = async (e) => {
    const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome";
    await fetch(url).then(response => response.json())
        .then((json) => {
            for (let i = 0; i < json.length; i++) {
                const option = document.createElement("option");
                option.value = json[i].id;
                const texto = document.createTextNode(json[i].nome);
                option.appendChild(texto);
                selectEstado.appendChild(option);
            }
            selectEstado.addEventListener("change", e => buscarCidades(selectEstado.value));
        });
}

const buscarCidades = (e) => {
    const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + e + "/municipios?orderBy=nome"
    fetch(url).then(response => response.json())
        .then((json) => {
            for (let i = 0; i < json.length; i++) {
                const option = document.createElement("option");
                option.value = json[i].id;
                const texto = document.createTextNode(json[i].nome);
                option.appendChild(texto);
                selectCidade.appendChild(option);
            }
        });
    }

const validaLimiteCaracteres = (e) => {
    const inputNome = document.getElementById("nome").value;
    if(inputNome.length >= 50){
        alert("Nome muito grande, atingiu o limite de caracteres: 50");
    }
}

const validaDataNascimento = (e) =>{
    const inputNascimento = document.getElementById("nascimento").value;
    const dataHoje = new Date();
    const dataMinima = "1900-01-01"
    const dataNovoFormato = ((dataHoje.getFullYear() )) + "-0" + ((dataHoje.getMonth() + 1)) + "-0" + dataHoje.getDay();
    if(inputNascimento >= dataNovoFormato){
        alert("Data inválida!");
    }
    if(inputNascimento <= dataMinima){
        alert("Data inválida!");
    }
}

button.addEventListener('click' , (e) => {
    e.preventDefault();
    validaDataNascimento();
    validaLimiteCaracteres();   
}


)

buscarPaises();
buscarEstados();
buscarCidades();
