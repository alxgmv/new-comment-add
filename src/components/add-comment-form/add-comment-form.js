import React, { Component } from 'react';

import './add-comment-form.css'

export default class AddCommentForm extends Component {

  state = {
    fields: [
      {
        author:'',
        commentText:''
      }
    ]
  };

  handleChange_author = (e) => {
    this.setState({
      author: e.target.value
    });
  };

  handleChange_text = (e) => {
    this.setState({
      commentText: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCommentAdd(this.state.fields.author, this.state.fields.commentText);
    this.setState({
      author:'',
      text:''
    })
  }



  render() {
    return (
      <form className="CommentForm"
            onSubmit={this.handleSubmit}>
        <label>
          Author name:
          <input
            name="newAuthor"
            className="CommentInput"
            type="text"
            placeholder="Name"
            value={this.state.fields.author}
            onChange={this.handleChange_author}
          />
        </label>
        <label>
          Comment text:
          <textarea
            name="newCommentText"
            className="CommentText"
            type="submit"
            placeholder="Comment text"
            value={this.state.fields.commentText}
            onChange={this.handleChange_text}
          />
        </label>
        <button type="submit"
                className="formButton"
                onSubmit={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}
