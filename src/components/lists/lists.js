import React, { Component } from "react";
import Item from "../item/item";
import "./lists.sass"

class Lists extends Component {
  renderItem = () => {
    
    const {listsToShow, photos} = this.props;
    const images = ( photos == "bayern" ) ? "Bayern" : "PSG";
    return listsToShow.map((item) => {
      const { name, players } = item;
      return (
        <div className = "lists">
          <div className = "lists__img">
            <img src={`${process.env.PUBLIC_URL + `/img/${images}-Logo.png`}`}/>
          </div>
          <h2>{name}</h2>
          <ul>
            <Item playersToShow={players} />
          </ul>
        </div>
      )
    });
  }

  render() {
    return <>{this.renderItem()}</>
  }
}

export default Lists;