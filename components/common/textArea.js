import React from 'react';

export default class TextArea extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="form-group">
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <div className="field">
                    <textarea  
                        className="form-control"
                        name ={this.props.name}
                        value ={this.props.value}
                        rows ={this.props.rows}
                        placeholder={this.props.placeholder}
                        onChange={this.props.onChange}
                    />
                    <div>{this.props.error}</div>
                </div>
            </div>
        );
    }
}

TextArea.propTypes = {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string,
    value: React.PropTypes.string,
    rows: React.PropTypes.number,
    error: React.PropTypes.string  
};
TextArea.defaultProps = {
    placeholder : '',
    value:'',
    error:'',
    rows: 3
}