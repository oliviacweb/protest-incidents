import React, { Component } from "react";
import "./USState.css";
import { Link, Route } from "react-router-dom";




class USState extends Component {
    constructor(props) {
        super(props);
      this.state = Object.assign({}, this.props);
      this.state.cities = this.state.stateIncidents ? [...new Set(this.state.stateIncidents.map(
        incident => incident.city
      ))].sort() : [];
    }

    noCities() {
      if(this.state.stateName && this.state.stateName !== '---') {
        return <p>No incidents reported in {this.state.stateName}.</p>
      }
      return null
    }


    render() {

        return (
          (this.state.cities.length === 0) ?
          this.noCities() :
           <div>
           <h3>Cities</h3>
            <div className="USState">
             <Link key='all' to={{
               pathname: `/all-cities`,
               state: {
                 stateName: this.state.stateName,
                 incidents: this.state.stateIncidents,
                 savedStories: this.state.savedStories

               }
             }}>
             <button className='all-cities'>All Cities</button>
             </Link>

              {this.state.cities.map(city =>
                {
                  let incidents = this.state.stateIncidents.filter(
                  stateIncident => stateIncident.city === city
                )
                return <Link key={city} to={{
                  pathname: `/city-selected`,
                  state: {
                    stateName: this.state.stateName,
                    cityName: city,
                    incidents,
                    savedStories: this.state.savedStories
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
