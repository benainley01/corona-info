import React, { Component } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar.js";
import "antd/dist/antd.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      results: [],
      date: new Date().toLocaleString(),
    };
  }

  changeParent = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  render() {
    let confirmed = this.state.results.TotalConfirmed;
    let deaths = this.state.results.TotalDeaths;
    let recovered = this.state.results.TotalRecovered;
    let countryName = this.state.results.Country;

    return (
      <div className="all">
        <header>
          <h1 className="title">Coronavirus Country Live Tracker</h1>
          <h2 className="description">
            Live tracker is updated every 10 minutes.
            <p>Time Accessed: {this.state.date}</p>
          </h2>
          <h1 className="searchBar">
            <SearchBar changeParent={this.changeParent}></SearchBar>
          </h1>
        </header>
        <h2 className="statistics">
          <div>Country: {countryName}</div>
          <div>Confirmed: {confirmed}</div>
          <div>Deaths: {deaths}</div>
          <div>Recovered: {recovered}</div>
        </h2>
      </div>
    );
  }
}

export default App;
