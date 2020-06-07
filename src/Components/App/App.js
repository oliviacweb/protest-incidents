import React, { Component } from "react";
import "./App.css";
import HeaderForm from '../HeaderForm/HeaderForm'
import { Route } from "react-router-dom";
import CityIncidents from '../CityIncidents/CityIncidents';




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

        return (
            <div className="App">
              <HeaderForm
              stateIncidents={this.state.stateIncidents}
              />
              <Route exact path="/city-selected" component={CityIncidents}>

              </Route>
        

            </div>

        );
    }
}

export default App;
