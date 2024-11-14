export function motivation() {
    const quote = document.querySelector('.quote');
    const author = document.querySelector('.author');
    const changeQuote = document.querySelector('.change-quote');

    const array = [
        {
            "text": "Пишите код так, как будто сопровождать его будет склонный к насилию психопат, который знает, где вы живете",
            "author": "Стив Макконнелл"
        },
        {
            "text": "Сложность программы растет до тех пор, пока не превысит способности программиста",
            "author": "Артур Блох. Законы Мэрфи"
        },
        {
            "text": "Ходить по воде и разрабатывать программы, следуя ТЗ, очень просто… если они заморожены",
            "author": "И. Берард"
        }
    ];


    changeQuote.addEventListener('click', () => {
        const random = Math.floor(Math.random() * array.length);
        quote.textContent = array[random].text;
        author.textContent = array[random].author;
        Index = (Index + 1) % array.length;
    });

    const random = Math.floor(Math.random() * array.length);
    quote.textContent = array[random].text;
    author.textContent = array[random].author;
}