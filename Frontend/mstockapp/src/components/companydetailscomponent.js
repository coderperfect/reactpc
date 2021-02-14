import React from 'react';

const CompanyDetailsComponent = (props) => {
    const name = props.company.name;
    const details = props.company.details;
    const price = props.company.price;
    const isLoggedIn = props.isLoggedIn;
    const button = props.button;

    let buttonElement = null;

    if(isLoggedIn){
        if(button === "Watch")
            buttonElement = <button className="btn btn-primary">Watch</button>;
        else if(button === "Remove")
            buttonElement = <button className="btn btn-danger">Remove</button>;
    }

    return (
        <div className="card" style={{width:'70%'}}>
            <div className="card-header font-weight-bold">
                {name}
            </div>
            <div className="card-body">
                <p className="card-text">
                    {details}
                </p>
            </div>
            <div className="card-footer font-weight-bold">
                Today's Price: ${price} {buttonElement}
            </div>
        </div>
    );
}

export default CompanyDetailsComponent;