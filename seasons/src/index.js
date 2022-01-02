import React from "react";
import ReactDOM from 'react-dom';

// import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //
    //     // THIS IS THE ONLY PLACE WE DO DIRECT ASSIGNMENT OF STATE
    //     this.state = {lat: null, errorMessage: ''};
    // }

    // THIS IS THE ONLY PLACE WE DO DIRECT ASSIGNMENT OF STATE
    state = {lat: null, errorMessage: ''};

    componentDidMount() {
        console.log('My component was rendered to the screen');
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // setState updates the state. This is the only way of updating the state
                this.setState({lat: position.coords.latitude})

                // never do the following
                // this.state.lat = position.coords.latitude;
            },
            (err) => {
                this.setState({errorMessage: err.message})
            }
        );
    }

    componentDidUpdate() {
        console.log('My component was just updated. It re-rendered')
    }

    // we have to define render method
    render() {
        console.log('My component Render........!')

        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        } else if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>
        }
        return <div>Loading..</div>
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))
