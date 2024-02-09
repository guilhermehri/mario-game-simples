const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

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

    if(pipePosition <= 142 && pipePosition > 0 && marioPosition < 80){

        /*PIPE*/
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        /* MARIO*/
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = './images/game-over.png';
        mario.style.width = '90px'
        mario.style.marginLeft = '55px';

        /*pausando loop caso dê o "game over"*/
            clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);
