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
const textoBtnIniciarOuPausar = document.querySelector('#start-pause span');
const iconeBtnIniciarOuPausar = document.querySelector('.app__card-primary-butto-icon');
const tempoDisplay = document.querySelector('#timer');

let tempoDecorridoEmSegundos;
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
  tempoDecorridoEmSegundos = 25 * 60
  alterarContexto('foco')
  focoBtn.classList.add('active')
});

curtoBtn.addEventListener('click', () => {
  tempoDecorridoEmSegundos = 5 * 60
  alterarContexto('descanso-curto')
  curtoBtn.classList.add('active')
});

longoBtn.addEventListener('click', () => {
  tempoDecorridoEmSegundos = 15 * 60
  alterarContexto('descanso-longo')
  longoBtn.classList.add('active')
});

const alterarContexto = (contexto) => {
  mostrarTempo();
  html.setAttribute('data-contexto', contexto)
  banner.setAttribute('src', `/imagens/${contexto}.png`)
  botoes.forEach((contexto) => contexto.classList.remove('active'))
  switch (contexto) {
    case 'foco':
      titulo.innerHTML = `Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`
      encerrar()
      break;
      case 'descanso-curto':
      titulo.innerHTML = `Que tal dar uma respirada?  <strong class="app__title-strong">Faça uma pausa curta!</strong>`
      encerrar()
      break;
    case 'descanso-longo':
      titulo.innerHTML = `Hora de voltar à superfície.  <strong class="app__title-strong">Faça uma pausa longa.</strong>`
      encerrar()
      break;
  }
}

// Função que decrementa o tempo (executada pelo intervalo)
const contagemRegressiva = () => {
  if (tempoDecorridoEmSegundos <= 0) {
    soundStop.play()
    alert('Tempo finalizado!')
    encerrar()
    return
  }
  tempoDecorridoEmSegundos -= 1
  mostrarTempo();
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
  textoBtnIniciarOuPausar.textContent = 'Pausar'
  iconeBtnIniciarOuPausar.setAttribute('src',`/imagens/pause.png`)
}

// Listener correto
startPauseBtn.addEventListener('click', iniciarOuPausar)

function encerrar() {
  clearInterval(intervaloId)
  intervaloId = null
  textoBtnIniciarOuPausar.textContent = 'Começar'
  iconeBtnIniciarOuPausar.setAttribute('src',`/imagens/play_arrow.png`)
}

function mostrarTempo() {
  const tempo = new Date(tempoDecorridoEmSegundos * 1000);
  const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'});
  tempoDisplay.innerHTML = `${tempoFormatado}`;
}

mostrarTempo(); 