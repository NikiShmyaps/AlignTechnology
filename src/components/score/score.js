import React, { Component } from "react";
import "./score.sass"
import Service from "../../services/services";

class Score extends Component {
  data = new Service();

  state = {
    arr: []
  }

  getInfo = () => {
    this.data.getScore().then(items => {
      this.setState({arr: items});
    });
  }

  componentDidMount() {
    this.getInfo();
  }

  render() {
    return(
      <div className="score">
        <span>{this.state.arr[0]}</span>
        <span>:</span>
        <span>{this.state.arr[1]}</span>
      </div>
    );
  }
}
export default Score;