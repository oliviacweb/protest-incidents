import React, { Component } from "react";
import "./CityIncidents.css";





class CityIncidents extends Component {
    constructor(props) {
        super(props);
      this.state = Object.assign({}, this.props.location.state);
      this.toggleSave = this.toggleSave.bind(this);
      this.toggleShowSaved = this.toggleShowSaved.bind(this);
      this.showSaved = false;

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

    toggleShowSaved() {
      this.showSaved = !this.showSaved;
      this.forceUpdate();
    }

    displayIncident(incident) {
   return <div key={incident.id} className='incident-card'>
    {this.isSaved(incident.id) ?
    <div onClick={this.toggleSave} iid={incident.id} className='star saved'>&#10034;</div> :
    <div onClick={this.toggleSave} iid={incident.id} className='star'>&#10034;</div>}
    <h2>{incident.date}</h2>
    {this.state.cityName === 'all' ? <h2>{incident.city}</h2> : null }
    <h3>{incident.name}</h3>
    {incident.links.map((link, index2) => <li key={index2}><a href={link}>Click for more info</a></li>)}
    </div>
  }


    render() {
      const shownCards = this.state.incidents.map(incident => {
           return !this.showSaved || this.isSaved(incident.id) ?
         this.displayIncident(incident) :
         null
       }).filter(x => x)

        return (
           <div>
           <h2>Stories</h2>
           <button onClick={this.toggleShowSaved} className='show-saved'>{
             this.showSaved ? 'Show All Stories' : 'Show Saved Stories'
           }</button>
           <button onClick={() => {this.props.history.goBack()}}>Go Back</button>
            {shownCards.length ? shownCards : <p>No saved stories</p>}


            </div>

        );
    }
}

export default CityIncidents;
