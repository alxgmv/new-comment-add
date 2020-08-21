import React, { Component } from 'react';
import { connect } from 'react-redux';


import CommentList from '../components/comment-list/comment-list'
import AddCommentForm from '../components/add-comment-form/add-comment-form'
import './App.css';


import { addComment, deleteComment } from '../actions'

let App = (props) => {
  const {
    fields, addComment, deleteComment
  } = props;
  return (
    <div>
      <CommentList
        fields={fields}
        onDeleted={deleteComment}
        />
      <AddCommentForm
        onCommentAdd={addComment}
        />
    </div>
  )}

  const mapStateToProps = (state) => {
    return {
      fields: state
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      addComment: (author, commentText) => dispatch(addComment(author, commentText)),
      deleteComment: (id) => dispatch(deleteComment(id))
    }
  }

  App = connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);

  export default App;



  // deleteComment = (id) => {
  //   this.setState(({ fields }) => {
  //     const idx = fields.findIndex((el) => el.id === id);
  //     const newArray = [...fields.slice(0, idx), ...fields.slice(idx + 1)];
  //     return {
  //       fields: newArray
  //     };
  //   });
  // };
  //
  // addComment = (author_text, commentText_text) => {
  //   const newComment = this.createComment(author_text, commentText_text)
  //   this.setState(( { fields }) => {
  //     const newArray = [...fields, newComment]
  //     return {
  //       fields: newArray
  //     };
  //   });
  // };
