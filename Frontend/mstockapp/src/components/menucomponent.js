import React from 'react';

const MenuComponent = () => {
    const isLoggedIn = true;

    const loggedInMenu = (
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="#">Companies</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Watch List</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Compare Performance</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Logout</a>
            </li>
        </ul>
    );

    const notLoggedInMenu = (
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="#">Login</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Companies</a>
            </li>
        </ul>
    );

    let menu = null;

    if(isLoggedIn)
        menu = loggedInMenu;
    else
        menu = notLoggedInMenu;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">mStock App</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                {menu}
            </div>
        </nav>
    );
}

export default MenuComponent;