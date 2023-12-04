import React from "react";
function Fruitbox(props) {
    return (
        <div className="fruitbox">
            <img className="product-image" src={props.image} alt={props.alt} />
            <h2>{props.title}</h2>
            <div className="counter">
                <button
                className="button"
                type='button'
                disabled={props.count === 0}
                onClick={() => props.setCount(props.count -1)}
                >
                -</button>
                <h2>{props.count}</h2>
                <button
                className="button"
                type='button'
                onClick={() => props.setCount(props.count +1)}
                >
                +</button>


            </div>
        </div>
    );
}


export default Fruitbox;