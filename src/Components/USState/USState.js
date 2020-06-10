import React, { Component } from "react";
import "./USState.css";
import { Link } from "react-router-dom";

class USState extends Component {
    constructor(props) {
        super(props);
      this.state = Object.assign({}, this.props);
      console.log('incidents', this.state.stateIncidents)

      this.state.cities = this.state.stateIncidents ? [...new Set(this.state.stateIncidents.map(
        incident => incident.city
      ))].sort() : [];
    }

    noCities() {
      if(this.state.stateName && this.state.stateName !== '---') {
        return <div><h2>{this.state.stateName}</h2><p>No incidents reported in {this.state.stateName}.</p></div>
      }
      return null
    }


    render() {
      console.log('citiesss', this.state.cities)

        return (
          (this.state.cities.length === 0) ?
          this.noCities() :
           <div>
           <h2>{this.state.stateName}</h2>
           <h3>Cities</h3>
            <div className="USState">
             <Link key='all' to={{
               pathname: `/city-selected`,
               state: {
                 stateName: this.state.stateName,
                 cityName: 'all',
                 incidents: this.state.stateIncidents,
                 savedStories: this.state.savedStories,
               }
             }}>
             <button title='all-cities' className='all-cities'>All Cities</button>
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
                }}><button title='city-button'>{city}: {incidents.length}</button></Link>
              }
              )}

            </div>
            </div>

        );
    }
}

export default USState;
