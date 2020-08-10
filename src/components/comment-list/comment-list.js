import React from 'react';

import CommentListItem from '../comment-list-item/comment-list-item'

const CommentList = ({ fields }) => {
  const elements = fields.map((field) => {
    return (
      <li key={field.id}>
      <CommentListItem
        author={field.author}
        commentText={field.commentText}
        date={field.date}
      />
      </li>
    )}
  )
  return (
    <ul>
      { elements }
    </ul>
  );
};


export default CommentList;
