import React, { Component } from "react";
import "./USState.css";
import { Link, Route } from "react-router-dom";




class USState extends Component {
    constructor(props) {
        super(props);
      this.state = Object.assign({}, this.props.location.state);
      this.state.cities = [...new Set(this.state.stateIncidents.map(
        incident => incident.city
      ))].sort()
    }


    render() {



        return (
           <div>
           <h3>Cities</h3>
            <div className="USState">
              {this.state.cities.map(city =>
                <Link to={{
                  pathname: `/city-selected`,
                  state: {
                    stateName: this.state.stateName,
                    cityName: city,
                    incidents: this.state.stateIncidents.filter(
                      stateIncident => stateIncident.city === city
                    )
                  }
                }}><button>{city}</button></Link>
              )}
            </div>
            </div>

        );
    }
}

export default USState;
