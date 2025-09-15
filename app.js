let dificuldade = 0;
let socosNecessarios;
let personagem;
let oponente;
let idDaBriga;
let perdeu;

let socos = 0;

function perder() {
    vitoriaOuPerda('meuContainer', './img/perdeu!.mp4', 40000);
}

function dificuldadeFacil() {
    dificuldade = 1;
    socosNecessarios = 10;
    console.log(dificuldade);
    trocarTextos('h2', 'escolha o personagem!');
    esconderElementos('facil', 'normal', 'dificil', 'mDificil');
    mostrarElementos('emanuel', 'mylena', 'yago', 'del', 'mateus', 'kaua');
    tempo = 3000;
}

function dificuldadeNormal() {
    dificuldade = 2;
    socosNecessarios = 30;
    console.log(dificuldade);
    trocarTextos('h2', 'escolha o personagem!');
    esconderElementos('facil', 'normal', 'dificil', 'mDificil');
    mostrarElementos('emanuel', 'mylena', 'yago', 'del', 'mateus', 'kaua');
    tempo = 6000;
}

function dificuldadeDificil() {
    dificuldade = 3;
    socosNecessarios = 50;
    console.log(dificuldade);
    trocarTextos('h2', 'escolha o personagem!');
    esconderElementos('facil', 'normal', 'dificil', 'mDificil');
    mostrarElementos('emanuel', 'mylena', 'yago', 'del', 'mateus', 'kaua');
    tempo = 10000;
}

function dificuldadeMDificil() {
    dificuldade = 4;
    socosNecessarios = 80;
    console.log(dificuldade);
    trocarTextos('h2', 'escolha o personagem!');
    esconderElementos('facil', 'normal', 'dificil', 'mDificil');
    mostrarElementos('emanuel', 'mylena', 'yago', 'del', 'mateus', 'kaua');
    tempo = 15000;
}

function selecionarEmanuel() {
    trocarTextos('h2', 'escolha oponente!!');
    personagem = 'emanuel';
    console.log(personagem);
    esconderElementos('emanuel', 'mylena', 'yago', 'del', 'mateus', 'mateus', 'kaua');
    mostrarElementos('emanuelDoMal', 'mylenaDoMal', 'yagoDoMal', 'delDoMal', 'mateusDoMal', 'kauaDoMal');
}

function selecionarDel() {
    trocarTextos('h2', 'escolha oponente!!');
    personagem = 'del';
    console.log(personagem);
    esconderElementos('emanuel', 'mylena', 'yago', 'del', 'mateus', 'kaua');
    mostrarElementos('emanuelDoMal', 'mylenaDoMal', 'yagoDoMal', 'delDoMal', 'mateusDoMal', 'kauaDoMal');
}

function selecionarMylena() {
    trocarTextos('h2', 'escolha oponente!!');
    personagem = 'mylena';
    console.log(personagem);
    esconderElementos('emanuel', 'mylena', 'yago', 'del', 'mateus', 'kaua');
    mostrarElementos('emanuelDoMal', 'mylenaDoMal', 'yagoDoMal', 'delDoMal', 'mateusDoMal', 'kauaDoMal');
}

function selecionarYago() {
    trocarTextos('h2', 'escolha oponente!!');
    personagem = 'yago';
    console.log(personagem);
    esconderElementos('emanuel', 'mylena', 'yago', 'del', 'mateus', 'kaua');
    mostrarElementos('emanuelDoMal', 'mylenaDoMal', 'yagoDoMal', 'delDoMal', 'mateusDoMal', 'kauaDoMal');
}

function selecionarMateus() {
    trocarTextos('h2', 'escolha oponente!!');
    personagem = 'mateus';
    console.log(personagem);
    esconderElementos('emanuel', 'mylena', 'yago', 'del', 'mateus', 'kaua');
    mostrarElementos('emanuelDoMal', 'mylenaDoMal', 'delDoMal', 'yagoDoMal', 'mateusDoMal', 'kauaDoMal')
}
//do mal
function selecionarEmanuelDoMal() {
    trocarTextos('h2', 'LUTE!!!');
    oponente = 'emanuel';
    console.log(oponente);
    verificarLuta();
    esconderElementos('emanuelDoMal', 'mylenaDoMal', 'yagoDoMal', 'delDoMal', 'mateusDoMal', 'kauaDoMal');
    mostrarElementos('comecar');
}

function selecionarDelDoMal() {
    trocarTextos('h2', 'LUTE!!!');
    oponente = 'del';
    console.log(oponente);
    verificarLuta();
    console.log(idDaBriga);
    esconderElementos('emanuelDoMal', 'mylenaDoMal', 'yagoDoMal', 'delDoMal', 'mateusDoMal', 'kauaDoMal');
    mostrarElementos('comecar');
}

function selecionarMylenaDoMal() {
    trocarTextos('h2', 'LUTE!!!');
    oponente = 'mylena';
    console.log(oponente);
    verificarLuta();
    esconderElementos('emanuelDoMal', 'mylenaDoMal', 'yagoDoMal', 'delDoMal', 'mateusDoMal', 'kauaDoMal');
    mostrarElementos('comecar');
}

function selecionarYagoDoMal() {
    trocarTextos('h2', 'LUTE!!!');
    oponente = 'yago';
    console.log(oponente);
    verificarLuta();
    console.log(idDaBriga);
    esconderElementos('emanuelDoMal', 'mylenaDoMal', 'yagoDoMal', 'delDoMal', 'mateusDoMal', 'kauaDoMal');
    mostrarElementos('comecar');
}

function selecionarMateusDoMal() {
    trocarTextos('h2', 'escolha oponente!!');
    oponente = 'mateus';
    console.log(oponente);
    verificarLuta();
    console.log(idDaBriga);
    esconderElementos('emanuelDoMal', 'mylenaDoMal', 'yagoDoMal', 'delDoMal', 'mateusDoMal', 'kauaDoMal');
    mostrarElementos('comecar')
}

//parou
function setarTempoDePerda(tempos) {
    tempos = tempo;
    esconderElementos('comecar');
    mostrarElementos('socar');
    setTimeout(() => {
        if (socos != socosNecessarios) {
            perdeu = true;
            console.log(perdeu);
        }
    }, tempos);
    if (dificuldade == 1) {
        setarTimer1();
    }
    if (dificuldade == 2) {
        setarTimer2();
    }
    if (dificuldade == 3) {
        setarTimer3();
    }
    if (dificuldade == 4) {
        setarTimer4();
    }
}

function verificarLuta() {
    //trackear emanuel
    if (personagem == 'emanuel' && oponente == 'emanuel') {
        idDaBriga = 'emanuelxemanuelbriga.mp4';
        idDoFatality = 'fatalityExE.mp4';
        trocarImagem('imagemMudavel', './img/emanuelxemanuelpreF.png');
    }
    if (personagem == 'emanuel' && oponente == 'mylena') {
        idDaBriga = 'emanuelxmylenabriga.mp4';
        idDoFatality = 'fatalityExM.mp4';
        trocarImagem('imagemMudavel', './img/emanuelxmylenapreF.png');
    }
    if (personagem == 'emanuel' && oponente == 'yago') {
        idDaBriga = 'emanuelxyagobriga.mp4';
        idDoFatality = 'fatalityExY.mp4';
        trocarImagem('imagemMudavel', './img/emanuelxyagopreF.png');
    }
    if (personagem == 'emanuel' && oponente == 'del') {
        idDaBriga = 'emanuelxdelbriga.mp4';
        idDoFatality = 'fatalityExD.mp4';
        trocarImagem('imagemMudavel', './img/emanuelxdelpreF.png');
    }
    if (personagem == 'emanuel' && oponente == 'mateus') {
        idDaBriga = 'emanuelxmateusbriga.mp4';
        idDoFatality = 'fatalityExMa.mp4';
        trocarImagem('imagemMudavel', './img/emanuelxmateuspreF.png');
    }
    if (personagem == 'emanuel' && oponente == 'kaua') {
        idDaBriga = 'emanuelxkauabriga.mp4';
        idDoFatality = 'fatalityExK.mp4';
        trocarImagem('imagemMudavel', './img/emanuelxkauapreF.png');
    }
    //trackear mylena
    if (personagem == 'mylena' && oponente == 'mylena') {
        idDaBriga = 'mylenaxmylenabriga.mp4';
        idDoFatality = 'fatalityMxM.mp4';
        trocarImagem('imagemMudavel', './img/mylenaxmylenapreF.png');
    }
    if (personagem == 'mylena' && oponente == 'emanuel') {
        idDaBriga = 'mylenaxemanuelbriga.mp4';
        idDoFatality = 'fatalityMxE.mp4';
        trocarImagem('imagemMudavel', './img/mylenaxemanuelpreF.png');
    }
    if (personagem == 'mylena' && oponente == 'yago') {
        idDaBriga = 'mylenaxyagobriga.mp4';
        idDoFatality = 'fatalityMxY.mp4';
        trocarImagem('imagemMudavel', './img/mylenaxyagopreF.png');
    }
    if (personagem == 'mylena' && oponente == 'del') {
        idDaBriga = 'mylenaxdelbriga.mp4';
        idDoFatality = 'fatalityMxD.mp4';
        trocarImagem('imagemMudavel', './img/mylenaxdelpreF.png');
    }
    if (personagem == 'mylena' && oponente == 'mateus') {
        idDaBriga = 'mylenaxmateusbriga.mp4';
        idDoFatality = 'fatalityMxMa.mp4';
        trocarImagem('imagemMudavel', './img/mylenaxmateuspreF.png');
    }
    if (personagem == 'mylena' && oponente == 'kaua') {
        idDaBriga = 'mylenaxkauabriga.mp4';
        idDoFatality = 'fatalityMxK.mp4';
        trocarImagem('imagemMudavel', './img/mylenaxkauapreF.png');
    }
    //trackear yago
    if (personagem == 'yago' && oponente == 'yago') {
        idDaBriga = 'yagoxyagobriga.mp4';
        idDoFatality = 'fatalityY.mp4';
        trocarImagem('imagemMudavel', './img/yagoxyagopreF.png');
    }
    if (personagem == 'yago' && oponente == 'emanuel') {
        idDaBriga = 'yagoxemanuelbriga.mp4';
        idDoFatality = 'fatalityY.mp4';
        trocarImagem('imagemMudavel', './img/yagoxemanuelpreF.png');
    }
    if (personagem == 'yago' && oponente == 'mylena') {
        idDaBriga = 'yagoxmylenabriga.mp4';
        idDoFatality = 'fatalityY.mp4';
        trocarImagem('imagemMudavel', './img/yagoxmylenapreF.png');
    }
    if (personagem == 'yago' && oponente == 'del') {
        idDaBriga = 'yagoxdelbriga.mp4';
        idDoFatality = 'fatalityY.mp4';
        trocarImagem('imagemMudavel', './img/yagoxdelpreF.png');
    }
    if (personagem == 'yago' && oponente == 'mateus') {
        idDaBriga = 'yagoxmateusbriga.mp4';
        idDoFatality = 'fatalityY.mp4';
        trocarImagem('imagemMudavel', './img/yagoxmateuspreF.png');
    }
    if (personagem == 'yago' && oponente == 'kaua') {
        idDaBriga = 'yagoxkauabriga.mp4';
        idDoFatality = 'fatalityY.mp4';
        trocarImagem('imagemMudavel', './img/yagoxkauapreF.png');
    }
    //trackear del
    if (personagem == 'del' && oponente == 'del') {
        idDaBriga = 'delxdelbriga.mp4';
        idDoFatality = 'fatalityD.mp4';
        trocarImagem('imagemMudavel', './img/delxdelpreF.png');
    }
    if (personagem == 'del' && oponente == 'emanuel') {
        idDaBriga = 'delxemanuelbriga.mp4';
        idDoFatality = 'fatalityD.mp4';
        trocarImagem('imagemMudavel', './img/delxemanuelpreF.png');
    }
    if (personagem == 'del' && oponente == 'mylena') {
        idDaBriga = 'delxmylenabriga.mp4';
        idDoFatality = 'fatalityD.mp4';
        trocarImagem('imagemMudavel', './img/delxmylenapreF.png');
    }
    if (personagem == 'del' && oponente == 'yago') {
        idDaBriga = 'delxyagobriga.mp4';
        idDoFatality = 'fatalityD.mp4';
        trocarImagem('imagemMudavel', './img/delxyagopreF.png');
    }
    if (personagem == 'del' && oponente == 'mateus') {
        idDaBriga = 'delxmateusbriga.mp4';
        idDoFatality = 'fatalityD.mp4';
        trocarImagem('imagemMudavel', './img/delxmateuspreF.png');
    }
    if (personagem == 'del' && oponente == 'kaua') {
        idDaBriga = 'delxkauabriga.mp4';
        idDoFatality = 'fatalityD.mp4';
        trocarImagem('imagemMudavel', './img/delxkauapreF.png');
    }
    //trackear mateus
    if (personagem == 'mateus' && oponente == 'mateus') {
        idDaBriga = 'mateusxmateusbriga.mp4';
        idDoFatality = 'fatalityMaxMa.mp4';
        trocarImagem('imagemMudavel', './img/mateusxmateuspreF.png');
    }
    if (personagem == 'mateus' && oponente == 'emanuel') {
        idDaBriga = 'mateusxemanuelbriga.mp4';
        idDoFatality = 'fatalityMaxE.mp4';
        trocarImagem('imagemMudavel', './img/mateusxemanuelpreF.png');
    }
    if (personagem == 'mateus' && oponente == 'mylena') {
        idDaBriga = 'mateusxmylenabriga.mp4';
        idDoFatality = 'fatalityMaxM.mp4';
        trocarImagem('imagemMudavel', './img/mateusxmylenapreF.png');
    }
    if (personagem == 'mateus' && oponente == 'yago') {
        idDaBriga = 'mateusxyagobriga.mp4';
        idDoFatality = 'fatalityMaxY.mp4';
        trocarImagem('imagemMudavel', './img/mateusxyagopreF.png');
    }
    if (personagem == 'mateus' && oponente == 'del') {
        idDaBriga = 'mateusxdelbriga.mp4';
        idDoFatality = 'fatalityMaxD.mp4';
        trocarImagem('imagemMudavel', './img/mateusxdelpreF.png');
    }
    if (personagem == 'mateus' && oponente == 'kaua') {
        idDaBriga = 'mateusxkauabriga.mp4';
        idDoFatality = 'fatalityMaxK.mp4';
        trocarImagem('imagemMudavel', './img/mateusxkauapreF.png');
    }
    //trackear kaua
    if (personagem == 'kaua' && oponente == 'kaua') {
        idDaBriga = 'kauaxkauabriga.mp4';
        idDoFatality = 'fatalityKxK.mp4';
        trocarImagem('imagemMudavel', './img/kauaxkauapreF.png');
    }
    if (personagem == 'kaua' && oponente == 'emanuel') {
        idDaBriga = 'emanuelxkauabriga.mp4';
        idDoFatality = 'fatalityKxE.mp4';
        trocarImagem('imagemMudavel', './img/kauaxemanuelpreF.png');
    }
    if (personagem == 'kaua' && oponente == 'mylena') {
        idDaBriga = 'kauaxmylenabriga.mp4';
        idDoFatality = 'fatalityKxM.mp4';
        trocarImagem('imagemMudavel', './img/kauaxmylenapreF.png');
    }
    if (personagem == 'kaua' && oponente == 'yago') {
        idDaBriga = 'kauaxyagobriga.mp4';
        idDoFatality = 'fatalityKxY.mp4';
        trocarImagem('imagemMudavel', './img/kauaxyagopreF.png');
    }
    if (personagem == 'kaua' && oponente == 'del') {
        idDaBriga = 'kauaxdelbriga.mp4';
        idDoFatality = 'fatalityKxD.mp4';
        trocarImagem('imagemMudavel', './img/kauaxdelpreF.png');
    }
    if (personagem == 'kaua' && oponente == 'mateus') {
        idDaBriga = 'kauaxmateusbriga.mp4';
        idDoFatality = 'fatalityKxMa.mp4';
        trocarImagem('imagemMudavel', './img/kauaxmateuspreF.png');
    }
}

function trocarTextos(tag, text) {
    let campo = document.querySelector(tag);
    campo.innerHTML = text;
}

function esconderElementos(...ids) {
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.style.display = 'none';
        }
    });
}

function mostrarElementos(...ids) {
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.style.display = 'block';
        }
    });
}

function tocarAudio(caminho) {
    const audio = new Audio(caminho);
    audio.play();
}

function trocarImagem(id, novaImagem) {
    const img = document.getElementById(id);
    if (img) {
        img.src = novaImagem;
    }
}

function trocarVideoPorImagem(id, imagemSrc) {
    const video = document.getElementById(id);
    if (video && video.tagName === 'VIDEO') {
        const img = document.createElement('img');
        img.id = id;
        img.src = imagemSrc;
        img.width = video.width || 400;
        img.height = video.height || 400;
        video.parentNode.replaceChild(img, video);
    }
}

function vitoriaOuPerda(idContainer, videoSrc, tempoMs) {
    const container = document.getElementById(idContainer);
    if (container) {
        const video = document.createElement('video');
        video.src = videoSrc;
        video.autoplay = true;
        video.controls = false;
        video.style.width = '100%';
        video.style.height = '100%';
        video.style.objectFit = 'cover';

        container.appendChild(video);

        setTimeout(() => {
            container.removeChild(video);
        }, tempoMs);
    }
}

function trocarPorVideo(id, videoSrc) {
    const img = document.getElementById(id);
    if (img) {
        const video = document.createElement('video');
        video.autoplay = true;
        video.src = videoSrc;
        video.controls = false;
        video.width = 400;
        video.height = 400;
        img.parentNode.replaceChild(video, img);
    }
}

function socar() {
    if (perdeu == true) {
        perder();
        esconderElementos('socar', 'texto');
    }
    socos++;
    console.log(socos);
    trocarPorVideo('imagemMudavel', `./img/${idDaBriga}`);
    if (socos == socosNecessarios) {
        vitoriaOuPerda('meuContainer', `./img/${idDoFatality}`, 40000);
        esconderElementos('socar', 'texto');
    }
}

function setarTimer1() {
    trocarImagem('timer', './img/timer3.png');
    setTimeout(() => {
        trocarImagem('timer', './img/timer2.png');
    }, 1000);
    setTimeout(() => {
        trocarImagem('timer', './img/timer1.png');
    }, 2000);
    setTimeout(() => {
        trocarImagem('timer', './img/timer0.png');
    }, 3000);
}
function setarTimer2() {
    trocarImagem('timer', './img/timer6.png');
    setTimeout(() => {
        trocarImagem('timer', './img/timer5.png');
    }, 1000);
    setTimeout(() => {
        trocarImagem('timer', './img/timer4.png');
    }, 2000);
    setTimeout(() => {
        trocarImagem('timer', './img/timer3.png');
    }, 3000);
    setTimeout(() => {
        trocarImagem('timer', './img/timer2.png');
    }, 4000);
    setTimeout(() => {
        trocarImagem('timer', './img/timer1.png');
    }, 5000);
    setTimeout(() => {
        trocarImagem('timer', './img/timer0.png');
    }, 6000);
}
function setarTimer3() {
    trocarImagem('timer', './img/timer10.png');
    setTimeout(() => {
        trocarImagem('timer', './img/timer9.png');
    }, 1000);
    setTimeout(() => {
        trocarImagem('timer', './img/timer8.png');
    }, 2000);
    setTimeout(() => {
        trocarImagem('timer', './img/timer7.png');
    }, 3000);
    setTimeout(() => {
        trocarImagem('timer', './img/timer6.png');
    }, 4000);
    setTimeout(() => {
        trocarImagem('timer', './img/timer5.png');
    }, 5000);
    setTimeout(() => {
        trocarImagem('timer', './img/timer4.png');
    }, 6000);
    setTimeout(() => {
        trocarImagem('timer', './img/timer3.png');
    }, 7000);
    setTimeout(() => {
        trocarImagem('timer', './img/timer2.png');
    }, 8000);
    setTimeout(() => {
        trocarImagem('timer', './img/timer1.png');
    }, 9000);
    setTimeout(() => {
        trocarImagem('timer', './img/timer0.png');
    }, 10000);
}

function setarTimer4() {
    trocarImagem('timer', './img/timer20.png');
    setTimeout(() => {
        trocarImagem('timer', './img/timer19.png');
    }, 1000);
    setTimeout(() => {
        trocarImagem('timer', './img/timer18.png');
    }, 2000);
    setTimeout(() => {
        trocarImagem('timer', './img/timer17.png');
    }, 3000);
    setTimeout(() => {
        trocarImagem('timer', './img/timer16.png');
    }, 4000);
    setTimeout(() => {
        trocarImagem('timer', './img/timer15.png');
    }, 5000);
    setTimeout(() => {
        trocarImagem('timer', './img/timer14.png');
    }, 6000);
    setTimeout(() => {
        trocarImagem('timer', './img/timer13.png');
    }, 7000);
    setTimeout(() => {
        trocarImagem('timer', './img/timer12.png');
    }, 8000);
    setTimeout(() => {
        trocarImagem('timer', './img/timer11.png');
    }, 9000);
    setTimeout(() => {
        trocarImagem('timer', './img/timer10.png');
    }, 10000);
    setTimeout(() => {
        trocarImagem('timer', './img/timer9.png');
    }, 11000);
    setTimeout(() => {
        trocarImagem('timer', './img/timer8.png');
    }, 12000);
    setTimeout(() => {
        trocarImagem('timer', './img/timer7.png');
    }, 13000);
    setTimeout(() => {
        trocarImagem('timer', './img/timer6.png');
    }, 14000);
    setTimeout(() => {
        trocarImagem('timer', './img/timer5.png');
    }, 15000);
    setTimeout(() => {
        trocarImagem('timer', './img/timer4.png');
    }, 16000);
    setTimeout(() => {
        trocarImagem('timer', './img/timer3.png');
    }, 17000);
    setTimeout(() => {
        trocarImagem('timer', './img/timer2.png');
    }, 18000);
    setTimeout(() => {
        trocarImagem('timer', './img/timer1.png');
    }, 19000);
    setTimeout(() => {
        trocarImagem('timer', './img/timer0.png');
    }, 20000);
}