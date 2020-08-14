import React, { Component } from 'react';

import './add-comment-form.css'

export default class AddCommentForm extends Component {

  state = {
    author:'',
    commentText:''
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
    this.props.onCommentAdd(this.state.author, this.state.commentText);
    e.target.reset();
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
            onChange={this.handleChange_author}
          />
        </label>
        <label>
          Comment text:
          <textarea
            name="newCommentText"
            className="CommentText"
            placeholder="Comment text"
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
