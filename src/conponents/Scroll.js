import React from "react";

const Scroll = (props) => {
  return (
    <div style={{ backgroundColor: "red", height: "500px" }}>
      {props.children}
    </div>
  );
};

export default Scroll;
