// Fetch a random landscape nature photo from Unsplash API
fetch(
    "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data.urls.regular);
      // Set the fetched image as the background of the body and update author info
      document.body.style.backgroundImage = `url(${data.urls.regular})`;
      document.getElementById("author").textContent = `By: ${data.user.name}`;
    })
    // Default image fallback incase of error
    .catch((err) => {
      document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDE2NzA&ixlib=rb-1.2.1&q=80&w=1080)`;
    });
  // Fetch cryptocurrency data for Ethereum from CoinGecko API
  fetch("https://api.coingecko.com/api/v3/coins/ethereum")
    .then((res) => {
      if (!res.ok) {
        throw Error("Something went wrong"); // Check for HTTP errors
      }
      return res.json();
    })
    .then((data) => {
      // Update the crypto section with the retrieved data
      document.getElementById("crypto-top").innerHTML = `
      <img src=${data.image.small} />
      <span>${data.name}</span>
  `;
      document.getElementById("crypto").innerHTML += `
  <p>🎯: R${data.market_data.current_price.zar}</p>
  <p>👆: R${data.market_data.high_24h.zar}</p>
  <p>👇: R${data.market_data.low_24h.zar}</p>`;
    })
    .catch((err) => console.error(err)); // Log errors if the fetch fails
  
    // Update the "time" element every second with the current time 
  // Update the "time" element every second with the current time
  
    function getCurrentTime() {
      const date = new Date()
      document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "small"})
  function getCurrentTime() {
    const date = new Date();
    document.getElementById("time").textContent = date.toLocaleTimeString(
      "en-us",
      { timeStyle: "medium" }
    );
  }
  
  // Call getCurrentTime every second
  
  setInterval(getCurrentTime, 1000)
  setInterval(getCurrentTime, 1000);
  
  // Get the user's current geographical location
  
  navigator.geolocation.getCurrentPosition(position => {
    // Fetch weather data from OpenWeatherMap API using current location
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        // Process and display the weather data
        .then(data => {
          console.log(data)
          const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
          // Update the HTML with weather icon, temperature, and city name
          document.getElementById("weather").innerHTML = `
              <img src=${iconUrl} />
              <p class="weather-temp">${Math.round(data.main.temp)}°C</p>
              <p class="weather-city">${data.name}</p>
          `
      })
      // Handle any errors during the fetch process
      .catch(err => console.error(err))
  });