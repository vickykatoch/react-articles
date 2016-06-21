import React from 'react';
import NavLink from './NavLink';

export default class Repos extends React.Component {
    render() {
        return (
            <div>
                <h1>Repository Page</h1>
                <ul role="nav">
                    <li><NavLink to="/repos/bkatoch/avam-store">Avam Store</NavLink></li>
                    <li><NavLink to="/repos/bkatoch/ng2">Angular 2</NavLink></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}