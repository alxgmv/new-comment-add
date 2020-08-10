import React , {Component} from 'react';

const CommentListItem = ( fields ) => {
    return (
      <ul>
      <li>{fields.author}</li>
      <li>{fields.commentText}</li>
      <li>{fields.date}</li>
      </ul>
    )
  }

export default CommentListItem;
