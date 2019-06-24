import React from "react";

const Card = ({flag, name}) => (
    <div>
        {flag && (<div className="card">
            <div className="card-header">
                {name}
            </div>
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
                    perspiciatis.</p>
                <a className="btn btn-outline-primary" href="#">Read More</a>
            </div>
        </div>)}
    </div>
)
export default Card
