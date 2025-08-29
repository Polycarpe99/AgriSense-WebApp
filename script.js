const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";
const city = "Kigali"; // or any other Rwandan region

async function getWeather() {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
  const data = await res.json();

  const weatherDiv = document.getElementById("weather-data");
  weatherDiv.innerHTML = `
    <p><strong>${data.name}</strong></p>
    <p>🌡️ Temperature: ${data.main.temp}°C</p>
    <p>🌥️ Condition: ${data.weather[0].description}</p>
  `;
}

getWeather();
