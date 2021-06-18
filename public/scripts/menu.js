(function () {
    let i = 0;
    const txt = 'Уровень откроется 20-го июня в 18:00';
    const speed = 100;

    (function typeWriter() {
        if (i < txt.length) {
            document.getElementById('timer-wrapper').innerHTML += txt[i];
            i++;
            setTimeout(typeWriter, speed);
        }
    })();
})();
