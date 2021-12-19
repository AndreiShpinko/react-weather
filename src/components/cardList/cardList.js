import React, { Component } from "react";
import Card from "../card";

import "./cardList.scss";

export default class CardList extends Component {
  render() {
    let content = this.props.dataOfCard.map((item,i) => {
      return <Card key={i} dataOfCard={item} />;
    });
    return <ul className="cardList">{content}</ul>;
  }
}
