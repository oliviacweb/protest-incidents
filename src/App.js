import React, { Component } from "react";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("https://raw.githubusercontent.com/2020PB/police-brutality/data_build/all-locations.json")
            .then(res => res.json())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {

       console.log(this.state)

        return (
            <div className="App">
                <header className="App-header">

                    <h1 className="App-title">Incident Reports</h1>
                </header>


            </div>
        );
    }
}

export default App;
