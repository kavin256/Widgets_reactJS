// import the react and react dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// create a react component
const App = () => {

    const buttonText = {text: "click me"};
    return (
        <div>
            <label htmlFor="name" className="label">Enter name:</label>
            <input id="name" type="text"/>
            <button style={{backgroundColor:'blue', color:'white'}}>{buttonText.text}</button>
        </div>
    );
};

// take the React component and show it on the screen
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
