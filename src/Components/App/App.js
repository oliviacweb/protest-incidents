import React, { Component } from "react";
import "./App.css";
import HeaderForm from '../Header/Header'
import { Route, Router } from "react-router-dom";



class App extends Component {
    constructor(props) {
        super(props);
        this.state = { stateIncidents: "" };
    }

    callAPI() {
        fetch("https://raw.githubusercontent.com/2020PB/police-brutality/data_build/all-locations.json")
            .then(res => res.json())
            .then(res => this.setState({ stateIncidents: this.organizeByState(res.data) }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    organizeByState(incidents) {
      let stateIncidents = {}
      for(let incident of incidents) {
        if(!stateIncidents[incident.state]) {
          stateIncidents[incident.state] = [];
        }
        stateIncidents[incident.state].push(incident);
      }
      return stateIncidents;
    }



    render() {

       console.log(this.state)
       // <ul>
       //  { (this.state.stateIncidents.data) ? this.state.stateIncidents.data.map(
         //    (data, index) =>
         //    <li key={index}> {data.state} </li>
         //
         //  )
         //  : 0 }
         // </ul>

        return (
            <div className="App">

            <Route
            exact
            path="/"
            render={() => <HeaderForm
            stateIncidents={this.state.stateIncidents}
            />}
            />









            </div>
        );
    }
}

export default App;
