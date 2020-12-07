import React from "react";
import Item from "../item/item";
import "./lists.sass"

const Lists = ({ listsToShow, photos }) => {
  const club = ( photos === "bayern" ) ? "Bayern" : "PSG";
  return (
    listsToShow.map((item, index) => {
      const { name, players } = item;
      return (
        <div className = "lists" key={`${club}${index}`}>
          <div className = "lists__img">
            <img src={`${process.env.PUBLIC_URL + `/img/${club}-Logo.png`}`} alt=""/>
          </div>
          <h2>{name}</h2>
          <ul>
            <Item club={club} playersToShow={players} />
          </ul>
        </div>
      )
    })
  );
};



export default Lists;