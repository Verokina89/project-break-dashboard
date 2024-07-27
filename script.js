const imgBackground = ['../../src/assets/img/backgroud/dogs-7275314_1280.jpg',
    '../../src/assets/img/backgroud/boat-house-2881457_1280.jpg',
'../../src/assets/img/backgroud/IMG_1522.jpeg',
'../../src/assets/img/backgroud/geeks-2894621_1280.jpg',
'../../src/assets/img/backgroud/keyboard-5017973_1280.jpg',
'../../src/assets/img/backgroud/macbook-606763_1280.jpg',
'../../src/assets/img/backgroud/nature-conservation-4352793_1280.jpg',
'../../src/assets/img/backgroud/pc-1207886_1280.jpg',
'../../src/assets/img/backgroud/plans-1867745_1280.jpg',
'../../src/assets/img/backgroud/sea-bridge-1748162_1280.jpg',
'../../src/assets/img/backgroud/IMG_0163.jpeg',
'../../src/assets/img/backgroud/IMG_0139.jpeg',
'../../src/assets/img/backgroud/IMG_0080.jpeg',
'../../src/assets/img/backgroud/hoja-fresca-refleja-verde-vibrante-rocio-manana-generado-ia_188544-15521.jpg',
'../../src/assets/img/backgroud/IMG_4434.jpeg'
]

const backgroudRandom = () => {
    const body = document.body
    const backgroudBody = Math.floor(Math.random() * imgBackground.length)

    body.style.backgroundImage = `url(${imgBackground[backgroudBody]})`
}
setInterval(backgroudRandom,15000)
backgroudRandom()


/*SCRIPT WEATHER*/

const API = 'https://api.weatherapi.com';
const apiKey = 'd8fbab0873de40e587c151657241507';
const currentConts = document.querySelector('.contents');
const contForecast = document.querySelector('.contentForecast');
//https://api.weatherapi.com/v1/current.json?key=d8fbab0873de40e587c151657241507&q=santander&aqi=no

const fetchWeather = async () => {
   
    try {
        const getData = await fetch(`${API}/v1/forecast.json?key=${apiKey}&q=santander&aqi=no`)
        const data = await getData.json()
        console.log(data);
        
        const dayWeather = {
            city: data.location.name,
            country: data.location.country,
            weather: data.current.condition.text,
            picture: data.current.condition.icon,
            temperature: data.current.temp_c,
            precipitation: data.current.precip_mm,
            humidity: data.current.humidity,
            wind: data.current.wind_kph,
            forecast: data.forecast.forecastday[0].hour
        }
        renderWeather(dayWeather)
        console.log(getData);
    } catch (error) {
        console.log(error. message);
    }
} 

const renderWeather = (weatherData) => {
    //console.log(weatherData);
    const {city, country, weather, picture, temperature, precipitation, humidity, wind, forecast} = weatherData
    //console.log(city, country, weather, picture, temperature, precipitation, humidity, wind, forecast);
    //console.log(forecast);
    let elements = ''
    const contents = `
        <div><span class="city">${city} /</span>
        <span class="country">${country}</span></div>
        <div><span class="weather">${weather}</span></div>
        <div class="tempDay">
            <div class="picture" style="width: 80px; height: 80px;">
            <img style="width: 100%; height: 100%;" src="${picture}" alt="${city}-forecast"></div>
            <div class="temperature">${temperature}
                <img src="./src/assets/img/imgtemperature.png" style="width: 30px; height: 30px;">
            </div>

            <div>
                <p>Precipitación: <span class="precipitation">${precipitation}%</span></p>
                <p>Humedad: <span class="humidity">${humidity}%</span></p>
             <p>Viento: <span class="wind">${wind} Km/h</span></p>
            </div>
        </div>
        `
        currentConts.insertAdjacentHTML('afterbegin', contents)
    
    forecast.forEach(element => {
        const onlyHour = element.time.split(' ')[1]
        elements += `
            <div class="summary">
                <div class="foreHour">${onlyHour}</div>
                <div style="width: 40px; height: 40px;" class="image">
                 <img style="width: 100%; height: 100%;" src="${element.condition.icon}" alt="${city}-forecast">
                 </div>
                 <div class="degres">${element.temp_c}Cº</div>
            </div>
            `
    });

    contForecast.innerHTML = elements
}

fetchWeather()