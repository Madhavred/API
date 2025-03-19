const API_BASE_URL = "http://localhost:5000"; // Ensure your backend is running

async function fetchWeather() {
    try {
        const response = await fetch(`${API_BASE_URL}/weather?query=London`);
        const data = await response.json();
        document.getElementById("weather").innerText = data.main ? `Temperature: ${data.main.temp}°C` : "Error fetching weather.";
    } catch (error) {
        document.getElementById("weather").innerText = "Failed to fetch weather.";
    }
}

async function fetchJoke() {
    try {
        const response = await fetch(`${API_BASE_URL}/joke`);
        const data = await response.json();
        document.getElementById("joke").innerText = data.joke || "Error fetching joke.";
    } catch (error) {
        document.getElementById("joke").innerText = "Failed to fetch joke.";
    }
}

async function fetchCrypto() {
    try {
        const response = await fetch(`${API_BASE_URL}/crypto?query=bitcoin`);
        const data = await response.json();
        document.getElementById("crypto").innerText = data.bitcoin ? `Bitcoin: $${data.bitcoin.usd}` : "Error fetching price.";
    } catch (error) {
        document.getElementById("crypto").innerText = "Failed to fetch crypto price.";
    }
}

async function fetchMovie() {
    try {
        const response = await fetch(`${API_BASE_URL}/movie?query=Inception`);
        const data = await response.json();
        document.getElementById("movie").innerText = data.Title ? `${data.Title} (${data.Year})` : "Error fetching movie.";
    } catch (error) {
        document.getElementById("movie").innerText = "Failed to fetch movie.";
    }
}

async function fetchWord() {
    try {
        const response = await fetch(`${API_BASE_URL}/word?query=example`);
        const data = await response.json();
        document.getElementById("word").innerText = data.word ? `${data.word}: ${data.meanings[0].definitions[0].definition}` : "Error fetching word.";
    } catch (error) {
        document.getElementById("word").innerText = "Failed to fetch word.";
    }
}
