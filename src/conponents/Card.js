import React from "react";

const Card = (props) => {
  return (
    <div>
      <img src={`https://robohash.org/${props.id}`} alt="yo" />
      <h1>{props.title}</h1>
      <h2>{props.email}</h2>
    </div>
  );
};

export default Card;
