import React, { Component } from 'react';

// import CommentListItem from '../comment-list-item/comment-list-item'
import CommentList from '../comment-list/comment-list'
import AddCommentForm from '../add-comment-form/add-comment-form'



import './App.css';

export default class App extends Component {

  maxId = 100

  state = {
    fields : [
      this.createComment('author: moderator', 'comment text: test message')
    ]
  }

  createComment (author, commentText) {
    return{
      author,
      commentText,
      date: new Date().toLocaleString(),
      id: this.maxId++,
      newAuthor: '',
      newComment:''
    }
  }

  addComment = (author_text, commentText_text) => {
    const newComment = this.createComment(author_text, commentText_text)
    this.setState(({ fields }) => {
      const newArray = [...fields, newComment]
      return {
        fields: newArray
      };
    });
  }

  render() {
    return (
    <div>
      <CommentList
        fields={this.state.fields}
        />
      <AddCommentForm
        onCommentAdd={this.addComment}
        input={this.state.fields}
        />
    </div>
  )}
}
