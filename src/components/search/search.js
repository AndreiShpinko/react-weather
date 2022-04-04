import React, { Component } from "react";
import GotWeather from "../../services/gotWeather";
import Spinner from "../Spinner/Spinner";

import "./Search.scss";

export default class Search extends Component {
  state = {
    error: false,
    loading: false,
    emptyInput: true,
  };

  weather = new GotWeather();

  onSubmitActive = (e) => {
    e.preventDefault();

    const input = e.currentTarget.querySelector("input");

    this.setState({ loading: true });

    this.weather
      .getWeatherOfCity(input.value)
      .then((data) => {
        this.setState({ error: false });
        const { main, name, sys, weather, coord: {lat, lon}  } = data;

        const city = name;
        const country = sys.country;
        const temp = main.temp;
        const iconId = weather[0].icon;
        const description = weather[0].description;

        this.props.addNewCard({ city, country, temp, iconId, description, lat, lon });
        this.setState({ loading: false });
      })
      .catch(() => {
        this.setState({ error: true, loading: false });
      });
    e.currentTarget.querySelector("input").value = "";
    this.setState({ emptyInput: true });

    input.focus();
  };

  onInputActive = (e) => {
    const inputValue = e.currentTarget.value;
    if (!inputValue) {
      this.setState({ emptyInput: true });
    } else {
      this.setState({ emptyInput: false });
    }
  };

  render() {
    let message = this.state.error ? (
      <span className="message">
        Not a valid city
        <span role="img" aria-label="monkey">
          🙊
        </span>
      </span>
    ) : null;
    let spinner = this.state.loading ? <Spinner /> : null;
    let buttonDisabled = (this.state.emptyInput)?"disabled":false;
    return (
      <>
        <h1 className="title">Simple weather project</h1>
        <div className="search-wrapper">
          <form onSubmit={this.onSubmitActive}>
            <div className="input-wrapper">
              <input
                type="text"
                className="input"
                placeholder="Search for a city"
                onInput={this.onInputActive}
              />
              {message}
            </div>
            <button type="submit" disabled={buttonDisabled}>Submit</button>
          </form>
          {spinner}
        </div>
      </>
    );
  }
}
