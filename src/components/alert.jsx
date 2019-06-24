import React from "react";

const Alert = ({display, onClose, onUnfreeze}) => (
    <div>
        {display && (<div className="alert alert-warning text-left">
        <h4 className="alert-heading"> Feature flags have been updated</h4>
        <p>If you want to be updated now, click <strong>Unfreeze</strong> to see the changes. <br/>
            Next load of the page will show the changes.</p>
        <hr/>
        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, odio?</p>
        <br/>
        <div className="container">
            <div className="row">
                <div className="col"/>
                <div className="col">
                    <button onClick={onUnfreeze} className="btn btn-primary btn-block" type="button">
                        Unfreeze
                    </button>
                </div>
                <div className="col">
                    <button onClick={onClose} className="btn btn-secondary btn-block" type="button">
                        Cancel
                    </button>
                </div>
                <div className="col"/>
            </div>
        </div>
    </div>)}
    </div>
)
export default Alert
