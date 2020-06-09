import React, { Component } from "react";
import "./CityIncidents.css";
import { Link, Route } from "react-router-dom";




class CityIncidents extends Component {
    constructor(props) {
        super(props);
      this.state = Object.assign({}, this.props.location.state);
      this.toggleSave = this.toggleSave.bind(this);
      //this in bind is actually object of city incident

    }

    isSaved(id) {
      return id in this.state.savedStories && this.state.savedStories[id]
    }

    toggleSave(event) {
      const id = event.target.getAttribute('iid')
      this.setState((prevState) => {
        let newState = Object.assign({}, prevState)
        newState.savedStories[id] = !this.isSaved(id)
        return {newState}
     })
    }


    render() {
        return (
           <div>
           <h2>Stories</h2>
           <button onClick={() => {this.props.history.goBack()}}>Go Back</button>
           {this.state.incidents.map((incident, index) =>
            <div key={index} className='incident-card'>
            {this.isSaved(incident.id) ?
            <div onClick={this.toggleSave} iid={incident.id} className='star saved'>&#10034;</div> :
            <div onClick={this.toggleSave} iid={incident.id} className='star'>&#10034;</div>}
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
