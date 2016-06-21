import React from 'react';

export default class TextInput extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="form-group">
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <div className="field">
                    <input type="text" 
                        className="form-control"
                        name ={this.props.name}
                        value ={this.props.value}
                        placeholder={this.props.placeholder}
                        onChange={this.props.onChange}
                    />
                    <div>{this.props.error}</div>
                </div>
            </div>
        );
    }
}

TextInput.propTypes = {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string,
    value: React.PropTypes.string,
    error: React.PropTypes.string  
};
TextInput.defaultProps = {
    placeholder : '',
    value:'',
    error:''
}