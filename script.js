const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const nuvens = document.querySelector('.nuvens');

function jump(){

    mario.classList.add('jump');
    /* removendo delay nos ms definido */
    setTimeout(removerDelay, 500);
        function removerDelay(){
            mario.classList.remove('jump');
        }
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px',"");
    const nuvensPosition = +window.getComputedStyle(nuvens).right.replace('px',"");

    if(pipePosition <= 140 && pipePosition > 0 && marioPosition < 80){

        /*PIPE*/
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        /* MARIO*/
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = './images/game-over.png';
        mario.style.width = '90px'
        mario.style.marginLeft = '55px';

        /*NUVENS*/
        nuvens.style.animation = 'none';
        nuvens.style.right = `${nuvensPosition}px`;
    
        

        /*pausando loop caso dê o "game over"*/
            clearInterval(loop);
    }

}, 10);

/*keydown de listener p qualquer tecla*/
document.addEventListener('keydown', jump);
