// Select HTML elements
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// create required varabes for the url

const myKey = '216a889e8149b41fd0449b5fe1d16054'
const myLat = '49.76989943791785'
const myLong = '6.640876730805156'

// construt a ful pah using the template literals

// Trier, Germany coordinates: approx. 49.75, 6.64
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=216a889e8149b41fd0449b5fe1d16054';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // for testing
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;C`;

  const iconCode = data.weather[0].icon;
  const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  const description = data.weather[0].description;

  weatherIcon.setAttribute('src', iconURL);
  weatherIcon.setAttribute('alt', description);
  captionDesc.textContent = description;
}

apiFetch();