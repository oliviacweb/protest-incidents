import React, { Component } from "react";
import "./CityIncidents.css";
import { Link, Route } from "react-router-dom";




class CityIncidents extends Component {
    constructor(props) {
        super(props);
      this.state = Object.assign({}, this.props.location.state);

    }


    render() {



        return (
           <div>
           <h2>Stories</h2>
           {this.state.incidents.map(incident =>
            <div className='incident-card'><h3>{incident.name}</h3>
            </div> )
           }

            </div>

        );
    }
}

export default CityIncidents;
