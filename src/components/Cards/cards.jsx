import React, { useEffect, useState } from "react";
import cardData from "./cards_data";
import "./cards.css";

function Cards() {
  // maintain local state for the cards
  const [cards, setCards] = useState([]);

  // load data once on mount; in a real app this might be a fetch call
  useEffect(() => {
    setCards(cardData);
  }, []);

  return (
    <>
      <div className="main_div_card_container">
        <h1 className="card_heading_main">My Skills</h1>
        <div className="div_card_container">
          {cards.map((card) => (
            <div key={card.id} className="card_body">
              <h2 className="card_heading">{card.heading}</h2>

              <p className="card_discription">{card.description}</p>
              <input
                type="button"
                className="card_more_button"
                value={card.buttonText}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Cards;
