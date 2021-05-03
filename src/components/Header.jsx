import React,{Fragment} from 'react';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <Fragment>
            <header>
                <div className="container">
                    <div className="inner-content">
                        <div className="brand">
                            <Link to="/">Peliculas</Link>
                        </div>
                        <ul className="nav-links">
                            <li>
                                <Link to="/">Pelis</Link>
                            </li>
                            <li>
                                <Link to="/watched">Vistos</Link>
                            </li>
                            <li>
                                <Link to="/add" className="btn">Add</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            
        </Fragment>
    );
}

export default Header;
