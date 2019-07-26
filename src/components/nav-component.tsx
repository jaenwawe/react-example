import * as React from 'react';
import { Link } from 'react-router-dom';
// import RevLogo from '../assets/rev-logo.png'

const NavComponent: React.FC = () => {
    return (
        <div>
            <nav className="navbar navbar-toggleable-md navbar-expand-lg navbar-light bg-light display-front nav-pad">
                <div className="navbar-header c-pointer shift-left">
                    {/* <Link to="/first" className="unset-anchor">
                        <img className="img-adjust-position rev-logo" alt="revature" />
                    </Link> */}
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample04">
                    <ul className="navbar-nav ml-auto margin-nav">


                        <li className="nav-item active">
                            <Link to="/second"
                                className="unset-anchor nav-link">Second</Link>
                        </li>

                        <li className="nav-item active">
                            <Link to="/clicker"
                                className="unset-anchor nav-link">Clicker</Link>
                        </li>

                        <li className="nav-item active">
                            <Link to="/sum"
                                className="unset-anchor nav-link">Sum</Link>
                        </li>

                        <li className="nav-item active">
                            <Link to="/random"
                                className="unset-anchor nav-link">random</Link>
                        </li>

                        <li className="nav-item active">
                            <Link to="/luke"
                                className="unset-anchor nav-link">Luke</Link>
                        </li>

                        <li className="nav-item active">
                            <Link to="/spinner"
                                className="unset-anchor nav-link">Spinner</Link>
                        </li>

                        <li className="nav-item active">

                            <Link to="/ball"
                                className="unset-anchor nav-link">Ball</Link>
                        </li>

                        <li className="nav-item active">
                            <Link to="/dieRoller"
                                className="unset-anchor nav-link">Roller</Link>
                        </li>

                        <li className="nav-item active">
                            <Link to="/jessica"
                                className="unset-anchor nav-link">Jessica</Link>
                        </li>

                        <li className="nav-item active">
                            <Link to="/fungame"
                                className="unset-anchor nav-link">Really Fun Game</Link>
                        </li>

                        <li className="nav-item active">
                            <Link to="/spinning-atom"
                                className="unset-anchor nav-link">Spinning Atom
                            </Link>
                        </li>

                        <li className="nav-item active">
                            <Link to="/miguel"
                                className="unset-anchor nav-link">Miguel
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/arrays"
                                className="unset-anchor nav-link">Arrays
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/poke"
                                className="unset-anchor nav-link">Poke
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/edimdb"
                                className="unset-anchor nav-link">Ed IMDB
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/prog-jokes"
                                className="unset-anchor nav-link">Good Ole Laugh
                            </Link>
                            <li className="nav-item active">
                                <Link to="/user"
                                    className="unset-anchor nav-link">User Data</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/login"
                                    className="unset-anchor nav-link">Welcome
                            </Link>
                            </li>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavComponent;