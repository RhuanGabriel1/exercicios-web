const button = document.getElementById('button')

button.addEventListener('click', (event) => {
    event.preventDefault
 //alert('botao acionado')

    const nome = document.getElementById('nome')
    const data = document.getElementById('data').value
    const dataAtual = new Date();
    const dataFormatada = ((dataAtual.getFullYear() )) + "-0" + ((dataAtual.getMonth() + 1)) + "-0"
     + dataAtual.getDay();
    if(nome.value.length  >= 50){
        alert("O campo nome ultrapassou a quantidade de caracteres esperados.");   
    }
    if (data >= dataFormatada){ 
        alert("Data Válida");
    }   
})
