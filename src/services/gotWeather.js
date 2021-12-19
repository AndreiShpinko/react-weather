export default class GotWeather {
  constructor() {
    this.apiKey = "0ec1603692065b5d5f29b3f81aa84767";
  }

  getWeatherOfCity = async (inputValue) => {
    const resource = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${
        this.apiKey
      }&units=metric`
    );

    if (!resource.ok) {
      throw new Error(`Could not fetch ${inputValue}`);
    }
    return resource.json();
  };
}
