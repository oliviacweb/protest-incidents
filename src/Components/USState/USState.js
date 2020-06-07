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
             <Link to={{
               pathname: `/all-cities`,
               state: {
                 stateName: this.state.stateName,
                 incidents: this.state.stateIncidents
               }
             }}>
             <button className='all-cities'>All Cities</button>
             </Link>

              {this.state.cities.map(city =>
                {
                  let incidents = this.state.stateIncidents.filter(
                  stateIncident => stateIncident.city === city
                )
                return <Link to={{
                  pathname: `/city-selected`,
                  state: {
                    stateName: this.state.stateName,
                    cityName: city,
                    incidents
                  }
                }}><button>{city}: {incidents.length}</button></Link>
              }
              )}

            </div>
            </div>

        );
    }
}

// <Route exact path="/city-selected" component={CityIncidents}>
//
// </Route>
// <Route exact path="/all-cities" component={AllCities}>
//
// </Route>
export default USState;
