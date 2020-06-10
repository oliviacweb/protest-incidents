import React, { Component } from "react";
import "./App.css";
import HeaderForm from '../HeaderForm/HeaderForm'
import { Route } from "react-router-dom";
import CityIncidents from '../CityIncidents/CityIncidents';
import { fetchData } from "../../ApiCalls.js";
console.log(fetchData())



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          stateIncidents: ""
       };
    }


    componentDidMount() {
          fetchData()
          .then(res => this.setState({ stateIncidents: this.organizeByState(res.data)}))
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

    // stateIncidents={this.state.stateIncidents}
    // savedStories={this.state.savedStories}

    render() {
         console.log('arkansaaaas', this.state.stateIncidents)

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
