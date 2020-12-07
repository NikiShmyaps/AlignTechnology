import React, { Component } from "react";
import "./item.sass";

class Item extends Component {
  renderItem = () => {
    const {playersToShow} = this.props;
    return playersToShow.map((item) => {
      const { name, surname, number } = item;
      return (
        <>
          <li className = "list-item">
            <span className = "list-item__number">{number}</span>
            <span>{name}</span> <span>{surname}</span> 
          </li>
        </>
      )
    }); 
  }
  
  render() {
    return <>{this.renderItem()}</>;
  }
}

export default Item;