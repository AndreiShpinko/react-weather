import React, { Component } from "react";
import CardList from "./components/CardList/CardList.js";
import Search from "./components/Search/Search";

export default class App extends Component {
  state = { data: [] };

  addNewCard = (obj) => {
    this.setState(({ data }) => {
      return { data: [...data, obj] };
    });
  };

  render() {
    return (
      <div className="app">
        <div className="container">
          <Search addNewCard={this.addNewCard} />
          <CardList dataOfCard={this.state.data} />
        </div>
      </div>
    );
  }
}
