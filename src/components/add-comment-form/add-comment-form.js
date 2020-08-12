import React, { Component } from 'react';

import './add-comment-form.css'

export default class AddCommentForm extends Component {

  // state = {
  //   inputs: [
  //     {
  //       author:'',
  //       commentText:''
  //     }
  //   ]
  // };


  handleChange_author = (e) => {
    const { newAuthor} = this.props;
    this.setState({
      newAuthor: e.target.value
    });
  };

  handleChange_text = (e) => {
    const { newComment} = this.props;
    this.setState({
      newComment: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCommentAdd(this.props.author, this.props.author);
    console.log(this.props);
    console.log(this.props.newAuthor);
    this.setState({
      newAuthor:'',
      newComment:''
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
            value={this.props.newAuthor}
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
            value={this.props.newComment}
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
