// Select HTML elements
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// Coordinates for Calabar
const myLat = '5.04';
const myLong = '8.35';
const myKey = '216a889e8149b41fd0449b5fe1d16054';

// Build the API URL
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&units=metric&appid=${myKey}`;

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error('Weather fetch failed:', error);
  }
}

function displayResults(data) {
  currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;C`;

  const iconCode = data.weather[0].icon;
  const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  const description = data.weather[0].description;

  weatherIcon.setAttribute('src', iconURL);
  weatherIcon.setAttribute('alt', description);
  captionDesc.textContent = description.charAt(0).toUpperCase() + description.slice(1);
}

apiFetch();

const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&units=metric&appid=${myKey}`;

async function fetchForecast() {
  try {
    const response = await fetch(forecastURL);
    if (response.ok) {
      const data = await response.json();
      displayForecast(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error('Forecast fetch error:', error);
  }
}

function displayForecast(data) {
  const forecastContainer = document.getElementById('forecast-container');
  forecastContainer.innerHTML = '';

  // Filter to get 3 days' forecast at 12:00 PM
  const forecastList = data.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 3);

  forecastList.forEach(day => {
    const date = new Date(day.dt_txt);
    const temp = day.main.temp;

    const card = document.createElement('div');
    card.classList.add('forecast-card');
    card.innerHTML = `
      <p><strong>${date.toLocaleDateString(undefined, { weekday: 'long' })}</strong></p>
      <p>${temp.toFixed(1)}&deg;C</p>
    `;
    forecastContainer.appendChild(card);
  });
}


// Call forecast fetch
fetchForecast();
