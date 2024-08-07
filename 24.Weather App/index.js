const geoApi = `https://api.weatherapi.com/v1/forecast.json?key=f7632ac7399f40a991c20553240708&q={city}&days=5&aqi=no&alerts=no`;

async function fetchCities(city) {
  try {
    const data = await fetch(geoApi.replace('{city}', city));
    const res = await data.json();
    return res;
  } catch (error) {
    console.log(error, 'error');
    throw error;
  }
}

async function getCurrentWeather(city) {
  if (!city) {
    city = await getCurrentCity();
  }
  if (!city) alert('No city found in your location search your own city');
  return fetchCities(city)
    .then((response) => {
      console.log(response, 'response');
      if (response.error) {
        throw new Error(
          '"No matching location found, please select correct city'
        );
      }
      //  display weather
      if (response) {
        displayWeather(response);
      }
    })
    .catch((error) => {
      alert(error);
      console.error(error, 'error while fetching data');
    });
}

const search = document.querySelector('.search-button');
const forecast = document.querySelector('.future-forecast');
search.addEventListener('click', async (event) => {
  let city = document.querySelector('.search-input').value;
  event.preventDefault();
  getCurrentWeather(city);
});

function displayWeather(data) {
  const forecast = document.querySelector('.future-forecast');
  const current = document.querySelector('.today-temp');

  if (current) {
    const temp = document.querySelector('.temp');
    const city = document.querySelector('.city');
    const currentIcon = document.querySelector('.current-icon');
    temp.textContent = `${data.current.temp_c}°C` || data.current.temp_c;
    city.textContent = data.location.name;
    currentIcon.src = `https:${data.current.condition.icon}`;
  }
  if (forecast) {
    forecast.innerHTML = '';
    for (let i = 0; i < data.forecast.forecastday.length; i++) {
      const item = document.createElement('div');
      const itemData = data.forecast.forecastday[i];
      const dateInfo = formatDate(itemData.date);
      item.classList.add('weather-forecast-item');
      item.innerHTML = `
                <img src="https:${itemData.day.condition.icon}" alt="weather icon">
                <div class="date">${dateInfo.dateMonth}</div> 
                <div class="day">${dateInfo.dayOfWeek}</div>
                <div class="temp">${itemData.day.avgtemp_c}°C</div>

        `;
      forecast.appendChild(item);
    }
  }
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const month = monthNames[date.getMonth()];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayOfWeek = dayNames[date.getDay()];

  return {
    fullDate: `${dayOfWeek}, ${day} ${month}`,
    dayOfWeek: dayOfWeek,
    dateMonth: `${day} ${month}`,
  };
}

function getCurrentCity() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser'));
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          // Using OpenStreetMap's Nominatim service for reverse geocoding
          fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          )
            .then((response) => response.json())
            .then((data) => {
              // The city name is usually in the 'city' or 'town' property
              const city = data.address.city || data.address.town || 'Unknown';
              resolve(city);
            })
            .catch((error) => {
              console.log(error, 'Error while fetching city name');
              reject(null);
            });
        },
        (error) => {
          reject(null);
        }
      );
    }
  });
}

getCurrentWeather();
