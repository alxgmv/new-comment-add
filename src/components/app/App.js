import React, { Component } from 'react';

import CommentList from '../comment-list/comment-list'
import AddCommentForm from '../add-comment-form/add-comment-form'



import './App.css';

export default class App extends Component {

  maxId = 0

  state = {
    fields : [
      this.createComment('author: moderator', 'comment text: test message'),
      this.createComment('author: test_user', 'comment text: test message')

    ]
  }

  createComment (author, commentText) {
    return {
      author,
      commentText,
      date: new Date().toLocaleString(),
      id: this.maxId++
    }
  }


  deleteComment = (id) => {
    this.setState(({ fields }) => {
      const idx = fields.findIndex((el) => el.id === id);
      const newArray = [...fields.slice(0, idx), ...fields.slice(idx + 1)];
      return {
        fields: newArray
      };
    });
  };

  addComment = (author_text, commentText_text) => {
    const newComment = this.createComment(author_text, commentText_text)
    this.setState(( { fields }) => {
      const newArray = [...fields, newComment]
      return {
        fields: newArray
      };
    });
  };



  render() {
    return (
    <div>
      <CommentList
        fields={this.state.fields}
        onDeleted={this.deleteComment}
        />
      <AddCommentForm
        onCommentAdd={this.addComment}
        />
    </div>
  )}
}
