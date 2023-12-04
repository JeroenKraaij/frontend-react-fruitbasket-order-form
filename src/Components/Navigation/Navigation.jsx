import React from "react";
function Navigation(props) {
    return (
        <div className="navigation">
            <img className="brandlogo" src={props.image} alt={props.alt}/>
        </div>
    );
}


export default Navigation;