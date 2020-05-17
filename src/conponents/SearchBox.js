import React from "react";

const SearchBox = (props) => {
  return (
    <div>
      <input type="seatch" onChange={props.a} />
      {/* <h1 onClick={props.onClick}> inpute </h1> */}
    </div>
  );
};

export default SearchBox;
