import React from "react";
import Cardlist from "../conponents/Cardlist";
import SearchBox from "../conponents/SearchBox";
import { robots } from "../conponents/robotList";
import Scroll from "../conponents/Scroll";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 1,
      robot: robots,
      searchfield: "",
    };
  }

  onChange = (event) => {
    this.setState({ searchfield: event.target.value });
    // console.log(this.state.searchfield);
  };

  render() {
    const my = (val, ind, arr) => {
      return val.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    };

    const filteredRobots = this.state.robot.filter(my);

    return (
      <div>
        <h1>{this.state.number}</h1>
        <SearchBox a={this.onChange} />
        <Scroll>
          <Cardlist robot={filteredRobots} />;
        </Scroll>
      </div>
    );
  }
}

export default App;
