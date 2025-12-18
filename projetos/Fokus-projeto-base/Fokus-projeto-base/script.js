const html = document.querySelector('html');
const focoBtn = document.querySelector('.app__card-button--foco');
const curtoBtn = document.querySelector('.app__card-button--curto');
const longoBtn = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const startPauseBtn = document.querySelector('#start-pause');
const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('/sons/luna-rise-part-one.mp3');
const soundPlay = new Audio('/sons/play.wav');
const soundPause = new Audio('/sons/pause.mp3');
const soundStop = new Audio('/sons/beep.mp3');

let tempoDecorridoEmSegundos = 15000;
let intervaloId = null

musicaFocoInput.addEventListener('change', () => {
  if (musica.paused) {
    musica.play();
    musica.loop = true;
  } else {
    musica.pause();
  }
});



focoBtn.addEventListener('click', () => {
  alterarContexto('foco')
  focoBtn.classList.add('active')
});

curtoBtn.addEventListener('click', () => {
  alterarContexto('descanso-curto')
  curtoBtn.classList.add('active')
});

longoBtn.addEventListener('click', () => {
  alterarContexto('descanso-longo')
  longoBtn.classList.add('active')
});

alterarContexto = (contexto) => {
  html.setAttribute('data-contexto', contexto)
  banner.setAttribute('src', `/imagens/${contexto}.png`)
  botoes.forEach((contexto) => contexto.classList.remove('active'))
  switch (contexto) {
    case 'foco':
      titulo.innerHTML = `Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`
      break;
    case 'descanso-curto':
      titulo.innerHTML = `Que tal dar uma respirada?  <strong class="app__title-strong">Faça uma pausa curta!</strong>`
      break;
    case 'descanso-longo':
      titulo.innerHTML = `Hora de voltar à superfície.  <strong class="app__title-strong">Faça uma pausa longa.</strong>`
      break;
  }
}

// Função que decrementa o tempo (executada pelo intervalo)
const contagemRegressiva = () => {
  if (tempoDecorridoEmSegundos <= 0) {
    soundStop.play()
    encerrar()
    alert('Tempo finalizado!')
    return
  }
  tempoDecorridoEmSegundos -= 1
  console.log(tempoDecorridoEmSegundos)
}

// Função de iniciar/pausar (executada no click)
function iniciarOuPausar() {
  if(intervaloId){
    soundPause.play();
    encerrar()
    return
  }
  soundPlay.play();
  intervaloId = setInterval(contagemRegressiva, 1000)
}

// Listener correto
startPauseBtn.addEventListener('click', iniciarOuPausar)

function encerrar() {
  clearInterval(intervaloId)
  intervaloId = null
}

