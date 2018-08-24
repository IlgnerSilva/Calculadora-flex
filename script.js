let imgElement = document.querySelector('img');
let btnVantagem = document.querySelector('#vantagem');
let btnLimpar = document.querySelector('#limpar');
let inputEtanol =document.querySelector('#etanol');
let inputGasolina =document.querySelector('#gasolina');
let paragrafo = document.querySelector('p');

function trocarImagem(){
    let entradaEtanol = inputEtanol.value;
    let entradagasolina = inputGasolina.value;

    if (entradaEtanol / entradagasolina >= 0.7){
        imgElement.setAttribute('src', 'img/gasolina.png');
        paragrafo.innerHTML = 'É mais vantajoso abastecer com Gasolina';

    }else if(entradaEtanol / entradagasolina <= 0.7){
        imgElement.setAttribute('src', 'img/etanol.png');
        paragrafo.innerHTML = 'É mais vantajoso abastecer com Etanol';
    }
    
    else{
        alert('Digite apenas números mais o (.) ex: 3.998');
        inputEtanol.value = '';
        inputGasolina.value = '';
        imgElement.setAttribute('src', 'img/neutro.png');
        paragrafo.innerHTML = ''
    }
}

btnVantagem.onclick = trocarImagem;

btnLimpar.onclick = function(){
    inputEtanol.value = '';
    inputGasolina.value = '';
    imgElement.setAttribute('src', 'img/neutro.png');
    paragrafo.innerHTML = '';
}