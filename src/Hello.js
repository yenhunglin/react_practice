import React from "react";
import "./Hello.css";

// class Hello extends React.Component {
//   render() {
//     return <h1 className="title">hello {this.props.greeting} </h1>;
//   }
// }

const Hello = (props) => {
  return (
    <div>
      <div>hi</div>
      <h1 className="title">hey {props.greeting} </h1>
    </div>
  );
};
export default Hello;
