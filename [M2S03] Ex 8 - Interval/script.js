let myInterval = setInterval(() => {
    console.log('Testando interval');
}, 250);

setTimeout(() => {
    console.log ("Fim do Teste");
    clearInterval(myInterval);
}, 2500);

