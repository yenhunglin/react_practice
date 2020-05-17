import React from "react";
import Card from "./Card";

const Cardlist = ({ robot }) => {
  const a = (num, ind, arr) => {
    return (
      <div>
        <Card title={robot[ind].name} />
        <Card title="yo" />
      </div>
    );
  };

  const b = robot.map(a);

  return <div>{b}</div>;
};

export default Cardlist;
