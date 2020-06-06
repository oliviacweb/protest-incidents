import React, { Component } from "react";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("https://raw.githubusercontent.com/2020PB/police-brutality/data_build/all-locations.json")
            .then(res => res.json())
            .then(res => this.setState({ apiResponse: this.organizeByState(res.data) }))
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
       //  { (this.state.apiResponse.data) ? this.state.apiResponse.data.map(
         //    (data, index) =>
         //    <li key={index}> {data.state} </li>
         //
         //  )
         //  : 0 }
         // </ul>

        return (
            <div className="App">
                <header className="App-header">

                    <h1 className="App-title">Incident Reports</h1>
                </header>


            </div>
        );
    }
}

export default App;
