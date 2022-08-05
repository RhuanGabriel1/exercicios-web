const button = document.getElementById('button')

button.addEventListener('click', (event) => {
    event.preventDefault
 //alert('botao acionado')

    const nome = document.getElementById('nome')
    const data = document.getElementById('data')
    const dataAtual = new Date();
    console.log(dataAtual);

    if(nome.value.length  >= 50){
        alert("O campo nome ultrapassou a quantidade de caracteres esperados.");   
    }

    if (data >= dataAtual){
        console.log(data);
        alert("Data Válida");
        return true;
    }   
})
