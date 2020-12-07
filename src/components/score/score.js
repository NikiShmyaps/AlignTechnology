import React, { Component } from "react";
import "./score.sass"
import Service from "../../services/services";

class Score extends Component {
  getDataService = new Service();

  state = {
    scoreData: []
  }

  getInfo = () => {
    this.getDataService.getScore().then(items => {
      this.setState({scoreData: items});
    });
  }

  componentDidMount() {
    this.getInfo();
  }

  render() {
    return(
      <div className="score">
        <span>{this.state.scoreData[0]}</span>
        <span>:</span>
        <span>{this.state.scoreData[1]}</span>
      </div>
    );
  }
}
export default Score;