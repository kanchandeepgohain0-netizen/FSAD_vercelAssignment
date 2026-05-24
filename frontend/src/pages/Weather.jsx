import { useState } from "react";

function Weather() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getWeather = async () => {
    if (!location.trim()) {
      setError("Please enter a location");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

      if (!apiKey) {
        setError("API key not configured. Please add VITE_WEATHER_API_KEY to .env.local");
        setLoading(false);
        return;
      }

      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`
      );

      if (!response.ok) {
        if (response.status === 400) {
          throw new Error("Location not found");
        }
        throw new Error(`Weather API error: ${response.status}`);
      }

      const data = await response.json();
      setWeather(data);
      setError(null);
    } catch (err) {
      setError(err.message || "Failed to fetch weather data");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h1>Weather App</h1>

      <input
        type="text"
        placeholder="Enter location (e.g., London, New York)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        disabled={loading}
      />

      <button onClick={getWeather} disabled={loading}>
        {loading ? "Loading..." : "Get Weather"}
      </button>

      {error && (
        <div style={{ color: "red", marginTop: "10px" }}>
          <p>Error: {error}</p>
        </div>
      )}

      {weather && (
        <div style={{ marginTop: "20px" }}>
          <h2>{weather.location.name}, {weather.location.country}</h2>
          <p>Temperature: {weather.current.temp_c} °C</p>
          <p>Condition: {weather.current.condition.text}</p>
          <p>Humidity: {weather.current.humidity}%</p>
          <p>Wind Speed: {weather.current.wind_kph} km/h</p>
        </div>
      )}
    </div>
  );
}

export default Weather;