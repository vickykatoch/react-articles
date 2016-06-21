import React from 'react';
import {Link} from 'react-router';
import TextInput from '../common/textInput';
import TextArea from '../common/textArea';
import DropDown from '../common/dropDown';

export default class ArticleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories : ['', 'C#', 'C++', 'Java']
        }
        this.cancel = this.cancel.bind(this);
    }
    cancel(){
        console.log(this.props);
    }

    render() {
        return (
            <form class = "form-inline" role = "form" style={{marginBottom : "20px"}}>
                <div className="row">
                    <div className="col-sm-6">
                        <TextInput
                            name="title"
                            placeholder='Enter title'
                            label='Title'
                            value={this.props.article.title}
                            onChange={this.props.onChange}
                            />
                    </div>
                    <div className="col-sm-6">
                        <TextInput
                            name="author"
                            placeholder='Author name'
                            label='Author'
                            value={this.props.article.author}
                            onChange={this.props.onChange}
                            />
                    </div>
                    <div className="col-sm-12">
                    <TextArea
                            name="description"
                            placeholder='Brief description'
                            label='Description'
                            value={this.props.article.description}
                            rows={5}
                            onChange={this.props.onChange}
                            />
                    </div>
                    <div className="col-sm-6">
                        <DropDown
                            name="category"
                            label='Category'
                            value={this.props.article.category}
                            onChange={this.props.onChange}
                            data = {this.state.categories}
                            />
                    </div>
                    <div className="col-sm-6">
                        <TextInput
                            name="sourceUrl"
                            placeholder='Source url'
                            label='Source'
                            value={this.props.article.sourceUrl}
                            onChange={this.props.onChange}
                            />
                    </div>
                    {/*<div className="col-sm-6">
                        <TextInput
                            name="publishDate"
                            placeholder='Publishing date'
                            label='Publish date'
                            value={this.props.article.publishDate}
                            onChange={this.props.onChange}
                            />
                    </div>*/}
                    <div className="col-sm-12">
                        <TextInput
                            name="tags"
                            placeholder='Tags'
                            label='Tags'
                            value={this.props.article.tags}
                            onChange={this.props.onChange}
                            />
                    </div>
                    
                    <div className="col-sm-12">
                        <span className="pull-right" >
                            <input type="submit" 
                                onClick={this.props.onSave} 
                                value="Save" 
                                className="btn btn-sm btn-primary" style={{marginRight : "5px"}}/>
                            <Link to="/articles" className="btn btn-sm btn-default" >
                                Cancel
                            </Link>
                            
                        </span>
                    </div>
                </div>
            </form>
        );
    }
}

ArticleForm.propTypes = {
    article: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSave: React.PropTypes.func.isRequired
}