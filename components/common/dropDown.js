import React from 'react';

export default class DropDown extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var optionList = [];
        
        this.props.data.map(item=>{
            optionList.push(<option value={item} key={item}>{item}</option>)
        });
        return (
            <div className="form-group">
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <div className="field">
                    <select type="text"
                        className="form-control"
                        defaultValue={this.props.defaultValue}
                        onChange={this.props.onChange}
                        >
                        {optionList}
                    </select>
                    <div>{this.props.error}</div>
                </div>
            </div>
        );
    }
}
//
DropDown.propTypes = {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    data: React.PropTypes.array.isRequired,
    onChange: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string,
    defaultValue: React.PropTypes.string,
    value: React.PropTypes.string,
    error: React.PropTypes.string
};
DropDown.defaultProps = {
    placeholder: '',
    value: '',
    error: '',
    defaultValue:''
}