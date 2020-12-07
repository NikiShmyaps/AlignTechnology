import React, { Component } from "react";
import './app.sass';
import Lists from "../lists/lists";
import Score from "../score/score";
import Service from "../../services/services";

class App extends Component {
  getDataService = new Service();

  state = {
    arr: [],
    arrSecond: []
  };

  getInfoFirst = () => {
    this.getDataService.getFirst().then(items => {
      this.setState({arr: items});
    });
  }

  getInfoSecond = () => {
    this.getDataService.getSecond().then(items => {
      this.setState({arrSecond: items});
    });
  }

  componentDidMount() {
    this.getInfoFirst();
    this.getInfoSecond();
  }

  render() {
    return (
      <div className="app">
        <Lists
          photos = "bayern"
          listsToShow = {this.state.arr}
        />
        <Score/>
        <Lists
          photos = "psg"
          listsToShow = {this.state.arrSecond}
        />
      </div>
    );
  }
}

export default App;
