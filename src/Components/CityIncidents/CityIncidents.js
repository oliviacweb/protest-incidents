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
            <div className='incident-card'><h2>{incident.date}</h2><h3>{incident.name}</h3>
            {incident.links.map(link => <li><a href={link}>Click for more infos</a></li>)}
            </div> )
           }

            </div>

        );
    }
}

export default CityIncidents;
