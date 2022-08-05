const button = document.getElementById('button')

button.addEventListener('click', (event) => {
    event.preventDefault
 //alert('botao acionado')

    const nome = document.getElementById('nome')
    const data = document.getElementById('data')
    const dataAtual = new Date();

    if(nome.value.length  >= 50){
        alert("O campo nome ultrapassou a quantidade de caracteres esperados.");

  return true;
    }

    if (data >= dataAtual){
        alert("Data Válida");
        return true;
    } else {
        alert("Data Inválida");
        return false;
    }
    
})