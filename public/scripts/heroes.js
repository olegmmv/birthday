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
            title: 'Любитель ракет и сладких конфет',
            strength: 8,
            charisma: 9,
            agility: 6,
            charm: 5,
            luck: 4,
            specials: [
                'Способность "маскировка под испанца"',
                'Отключение режима сна и повышенная выносливость при приближении дедлайна',
                'Скорость избавления от костылей x2',
            ],
        },
        asya: {
            title: 'I’m home for your soul',
            strength: 5,
            charisma: 8,
            agility: 3,
            charm: 9,
            luck: 6,
            specials: [
                'Восстанавливает музыкальный слух на 34%',
                'Вероятность нанесения критического урона сердечкам х3',
                'Поднимет уровень твоей популярности на 89 очков',
            ],
        },
    };

    /* changing info */
    const descTitle = document.querySelector('.desc-title');
    const strengthBlock = document.querySelector('.strength');
    const charismaBlock = document.querySelector('.charisma');
    const agilityBlock = document.querySelector('.agility');
    const charmBlock = document.querySelector('.charm');
    const luckBlock = document.querySelector('.luck');
    const specialsBlock = document.querySelector('.desc-specials');
    const chooseBtn = document.querySelector('#choose');

    const changeInfo = (key) => {
        const { title, strength, charisma, agility, charm, luck, specials } = descriptions[key];
        descTitle.innerHTML = title;

        strengthBlock.innerHTML = `Сила – ${strength}`;
        charismaBlock.innerHTML = `Харизма – ${charisma}`;
        agilityBlock.innerHTML = `Ловкость – ${agility}`;
        charmBlock.innerHTML = `Обаяние – ${charm}`;
        luckBlock.innerHTML = `Удача – ${luck}`;

        specialsBlock.innerHTML = `Особые навыки: <ul><li>${specials.join('</li><li>')}</li></ul>`;
        chooseBtn.classList.remove('display-none');
        chooseBtn.setAttribute('href', `/menu?hero=${key}`);
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
