export function weather() {
    const input = document.querySelector('.weather .city');



    function initail() {
        const city = getFromLocalStorage('city') || 'Almalyk';
        if (city) {
            setToLocalStorage('city', city);
        }
        input.value = city;
        setToLocalStorageFromInput(input);

        fetchAndRender(city);
    }
    initail();
}

function setToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function getFromLocalStorage(key) {
    return localStorage.getItem(key);
}

function setToLocalStorageFromInput(inp) {
    let timeout;

    inp.addEventListener('input', async (e) => {

        clearTimeout(timeout)

        timeout = setTimeout(async () => {
            setToLocalStorage('city', e.target.value);
            fetchAndRender('city', e.target.value);
            const url = URL(e.target.value);

            const data = await getData(url);



            renderWeather(data);
        }, 1000);

    });
}
async function fetchAndRender(city) {
    const url = URL(city);

    const data = await getData(url);

    renderWeather(data);
}
function clearElements(icon, elements) {
    const regex = /\bowf-[\w-]+\b/g;

    icon.classList.forEach(classname => {
        if (classname.match(regex)) {
            icon.classList.remove(classname);
        }
    });
    elements.forEach(element => {
        element.textContent = '';
    });
}

function renderWeather(data) {
    const icon = document.querySelector('.weather-icon');
    const error = document.querySelector('.weather-error');
    const temperaature = document.querySelector('.temperature');
    const weatherDesc = document.querySelector('.weather-description');
    const wind = document.querySelector('.wind');
    const humidity = document.querySelector('.humidity');


    clearElements(icon, [temperaature, weatherDesc, wind, humidity]);

    if (data.cod) {
        error.textContent = data.message;
    }
    const clas = 'owf-' + data.weather[0]?.id;
    icon.classList.add(clas);

    temperaature.textContent = Math.round(data.main.temp - 273.15) + '°C';
    weatherDesc.textContent = data.weather[0].description;
    wind.textContent = 'Wind: ' + data.wind.speed + 'm/s';
    humidity.textContent = 'Humidity: ' + data.main.humidity + '%';
}

function URL(city) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=82903a85f9425346234574892e8ab5d5`;
}

async function getData(url) {
    const response = await fetch(url);

    const data = await response.json();
    return data;
}


// °C
// 82903a85f9425346234574892e8ab5d5
// https://api.openweathermap.org/data/2.5/weather?q=Tashkent&appid=82903a85f9425346234574892e8ab5d5

