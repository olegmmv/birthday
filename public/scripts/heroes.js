(function () {
    /* animation for title */
    const title = document.querySelector('.heroes-page__title');
    setTimeout(() => {
        title.classList.add('blinking');
        title.classList.remove('fadeInUp');
    }, 1000);

    /* heroes description */
    const descriptions = {
        oleg: {
            title: '«Как хорошо, что я свайпнула вправо» – ты в будущем',
            strength: 8,
            charisma: 9,
            agility: 6,
            charm: 5,
            luck: 4,
            special: [],
        },
        asya: {
            title: 'I’m home for your soul',
            strength: 8,
            charisma: 9,
            agility: 6,
            charm: 5,
            luck: 4,
            special: [],
        },
    };

    /* changing info */
    const descTitle = document.querySelector('.desc-title');
    const changeInfo = (key) => {
        const desc = descriptions[key];
        descTitle.innerHTML = desc.title;
    };

    /* selecting hero */
    const radioBtns = document.querySelectorAll('.radio');
    const radios = Array.from(radioBtns);

    let selected = null; // 'oleg' | 'asya'
    for (let radio of radios) {
        radio.addEventListener('change', () => {
            if (!selected) {
                title.classList.remove('blinking');
            }
            selected = radio.value;
            changeInfo(selected);
        });
    }
})();
