function myScope() {
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    const timer = document.querySelector('.timer');
    let sec = 0;
    let t; 

    function createSeconds(sec) {
        const data = new Date(sec * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    function Start() {
        timer.classList.remove('pausado');
        t = setInterval(function() {
            sec++;
            timer.innerHTML = createSeconds(sec);
        }, 1000)
    }

    function Pausar() {
        clearInterval(t); 
        timer.classList.add('pausado');
    }

    function Zerar() {
        clearInterval(t)
        timer.classList.remove('pausado');
        sec = 0;
        timer.innerHTML = '00:00:00';
    }

    iniciar.addEventListener('click', function() {
        clearInterval(t);
        Start();
    });
    pausar.addEventListener('click', function() {
        Pausar();
    });
    zerar.addEventListener('click', function() {
        Zerar();
    })
}

myScope(); 
