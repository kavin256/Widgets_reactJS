import './SeasonDisplay.css';
import React from "react";

const seasonConfig = {
    summer: {
        text: `Let's hit the frikin beach!`,
        iconName: 'sun'
    },
    winter: {
        text: `Burr.. it is chilly!`,
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season] // ES2015 syntax

    return (
        // here as you can see, the parent class name is the same as the component name. It's a good practice
        <div className={`season-display ${season}`}>
            <i className={`${iconName} icon icon-left massive`}/>
            <h1>
                {text}
            </h1>
            <i className={`${iconName} icon icon-right massive`}/>
        </div>
    );
}

export default SeasonDisplay;
