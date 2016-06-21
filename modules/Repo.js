
import React from 'react';

export default class Repo extends React.Component {
    render(){
        return (
            <h1>{this.props.params.repoName}</h1>        
        );
    }
}