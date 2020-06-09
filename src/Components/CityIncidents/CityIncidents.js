import React, { Component } from "react";
import "./CityIncidents.css";
import { Link, Route } from "react-router-dom";




class CityIncidents extends Component {
    constructor(props) {
        super(props);
      this.state = Object.assign({}, this.props.location.state);

    }

    isSaved(id) {
      return this.state.savedStories[id]

    }


    render() {




        return (
           <div>
           <h2>Stories</h2>
           <button onClick={() => {this.props.history.goBack()}}>Go Back</button>
           {this.state.incidents.map((incident, index) =>
            <div key={index} className='incident-card'>
            {this.isSaved(incident.id) ?
            <div className='star saved'>&#10034;</div> :
            <div className='star'>&#10034;</div>}
            <h2>{incident.date}</h2>
            <h3>{incident.name}</h3>
            {incident.links.map((link, index2) => <li key={index2}><a href={link}>Click for more info</a></li>)}
            </div> )
           }

            </div>

        );
    }
}

export default CityIncidents;
