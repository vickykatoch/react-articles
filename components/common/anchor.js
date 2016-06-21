import React from 'react';
import {Link} from 'react-router';

export default class Anchor extends React.Component {
    render(){
        return (
            <Link {...this.props} activeClassName="activeLink"/>
        );
    }
}