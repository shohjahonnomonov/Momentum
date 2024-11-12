import { timeOfDay } from "./utils/timeOfday.js";

export function sliderBg() {
    const sliderPrev = document.querySelector('.slide-prev');
    const sliderNext = document.querySelector('.slide-next');
    const body = document.querySelector('body');
    let num = 1;

    sliderNext.addEventListener('click', () => {

        if (num >= 20) num = 0;
        num += 1;

        const number = addZero(num);

        const url = makeUrl(number);

        changeBg(url);
        console.log(num);
    })

    sliderPrev.addEventListener('click', () => {
        num -= 1;
        if (num <= 0) num = 20;

        const number = addZero(num);

        const url = makeUrl(number);

        changeBg(url);
    })

    function changeBg(url) {
        body.style.background = `url(${url})`;
    }
    function addZero(number) {
        if (number <= 9 && number > 0) {
            return '0' + number;
        }
        return number;
    }

    function makeUrl(number) {
        const day = timeOfDay();

        return `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${day}/${number}.jpg`;
    }
}

