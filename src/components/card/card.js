import React, { Component } from "react";

import "./Card.scss";

export default class Card extends Component {
  render() {
    const { city, country, temp, iconId, description, lat, lon} = this.props.dataOfCard;
    const icon = `https://openweathermap.org/img/wn/${iconId}@2x.png`;
    return (
      <li className="card">
        <a
          href={`https://www.google.com.ua/maps/search/${lat}, ${lon}/`}
          target="_blank"
          className="card__link"
          rel="noopener noreferrer"
        >
          <div className="card__place">
            <h2 className="card__city">{city}</h2>
            <span className="card__country">{country}</span>
          </div>
          <span className="card__temp">
            {Math.round(temp)}
            <sup>°C</sup>
          </span>
          <figure>
            <img className="card__img" src={icon} alt="weather-img" />
            <figcaption className="card__description">{description}</figcaption>
          </figure>
        </a>
      </li>
    );
  }
}