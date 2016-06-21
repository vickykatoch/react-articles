import React from 'react';
import NavLink from './NavLink';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-fixed-top navbar-inverse">
                    <div className="container-fluid">
                        <ul className="nav navbar-nav">
                            <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/repos">Repos</NavLink></li>
                            <li><NavLink to="articles">Articles</NavLink></li>
                        </ul>
                    </div>

                </nav>
                <div style={{marginTop:"70px"}}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}