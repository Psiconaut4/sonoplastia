'use strict';

const sons = {
    'Q' : { sound: 'cavalo.mp3', message: 'Cavalo'},
    'W' : { sound: 'calma-pae.mp3', message: 'Calma Pai'},
    'E' : { sound: 'e-brincadeira-ein.mp3', message: 'eh brincadera ein'},
    'R' : { sound: 'ele-gosta.mp3', message: 'Ele goosta'},
    'A' : { sound: 'esqueca-tudo.mp3', message: 'Esqueça tudo'},
    'S' : { sound: 'eu-nao-entendi-o-que-ele-falou.mp3', message: 'eu num entendi oq ele falo'},
    'D' : { sound: 'irraa.mp3', message: 'Irraa'},
    'F' : { sound: 'olha-ele-ae.mp3', message: 'Olha ele ai'},
    'G' : { sound: 'que-isso-meu-filho.mp3', message: 'que isso meu filho, calma'},
    'H' : { sound: 'tomi.mp3', message: 'Tome'},
    'C' : { sound: 'uepa.mp3', message: 'UEPA'},
    'V' : { sound: 'ui.mp3', message: 'Uii'},
    'B' : { sound: 'cheega.mp3', message: 'Cheega'}
}


const criarDiv = (texto) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = `"${texto}" ${sons[texto].message}`;

    div.id = texto;
    document.getElementById('container').appendChild(div)
}

const exibir = (sons) => Object.keys(sons).forEach(criarDiv);

const tocarSom = (letra) => {
    const audio = new Audio(`./sounds/${sons[letra].sound}`);
    audio.play();
}
const adicionarEfeito = (letra) => document.getElementById(letra)
                                            .classList.add('active');
const removerEfeito = (letra) => {
    const div = document.getElementById(letra);
    const removeActive = () => div.classList.remove('active')
    div.addEventListener('transitionend', removeActive);
}
const ativarDiv = (evento) => { 
    let letra = '';
     if (evento.type == 'click') { 
        letra = evento.target.id;
     }else{ letra = evento.key.toUpperCase(); 

     }
    const letraPermitida = sons.hasOwnProperty(letra)
    if (letraPermitida){
        adicionarEfeito(letra);
        tocarSom(letra);
        removerEfeito(letra);
    }
}

exibir(sons);
document.getElementById('container')
        .addEventListener('click', ativarDiv);

window.addEventListener('keydown', ativarDiv);