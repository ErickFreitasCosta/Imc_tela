

function pegarDados(){
    let nome = document.querySelector('.nome');
    let idade =document.querySelector('.idade');
    let peso = document.querySelector('.peso');
    peso = parseFloat(peso.value);
    let altura = document.querySelector('.altura');
    altura = parseFloat(altura.value);

    

    let imc = peso/(altura*altura)

    

    if(imc<18.5){
        
        document.querySelector('.aparecer').innerHTML = nome.value +', Seu IMC é: ' + imc.toFixed(2) +' você está abaixo do peso normal. ';

        document.querySelector('.informacao').innerHTML = '<img src="imagens/magro.png" width="400px" height="500px">';

         
    }else if(imc>=18.5 && imc<=24.9){
        document.querySelector('.aparecer').innerHTML = nome.value +', Seu IMC é: ' + imc.toFixed(2) +' você está com o peso normal.';
        document.querySelector('.informacao').innerHTML = '<img src="imagens/normal.png" alt="" width="300px" height="300px">'


    }else if(imc>=25.0 && imc<=29.99){
        document.querySelector('.aparecer').innerHTML = nome.value +', Seu IMC é: ' + imc.toFixed(2) +' você está com sobrepeso.';
        document.querySelector('.informacao').innerHTML = '<img src="imagens/gordinho.png" alt="" width="300px" height="300px">'

    }else if(imc>=30){
        document.querySelector('.aparecer').innerHTML = nome.value +', Seu IMC é: ' + imc.toFixed(2) +' você está com sobrepeso.';
        document.querySelector('.informacao').innerHTML = 'Se você está com sobrepeso tens que fazer dieta.';
    }

}

function limparDados(){
    
    let nome = document.querySelector('.nome');
    nome.value='';
    document.querySelector('.nome').innerHTML = nome;

    let idade =document.querySelector('.idade');
    idade.value='';
    document.querySelector('.idade').innerHTML = idade;

    let peso =document.querySelector('.peso');
    peso.value='';
    document.querySelector('.peso').innerHTML = peso;

    let altura =document.querySelector('.altura');
    altura.value='';
    document.querySelector('.altura').innerHTML = altura;

    let apagarTudo =document.querySelector('.aparecer');
    apagarTudo.value='';
    document.querySelector('.aparecer').innerHTML = apagarTudo;

    let apagarTud =document.querySelector('.informacao');
    apagarTud.value='';
    document.querySelector('.informacao').innerHTML = apagarTud;
}
