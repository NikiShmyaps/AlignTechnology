import React from "react";
import "./item.sass";

const Item = ({ playersToShow, club }) => {
  return (
    playersToShow.map((item, index) => {
      const { name, surname, number } = item;
      return (
        <li className = "list-item" key={`${club}${index}`}>
          <span className = "list-item__number">{number}</span>
          <span>{name}</span> <span>{surname}</span> 
        </li>
      );
    }));
};

export default Item;