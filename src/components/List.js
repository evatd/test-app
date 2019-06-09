import React from "react";
import Card from "./Card";
//card text is what was card title
const List = ({ title, cards }) => {
  return (
    <div style={{ background: "grey", maxWidth: '500px' }}>
      {title}
      {cards && cards.map(card => <Card text={card.text} />)}
    </div>
  );
};

export default List;
