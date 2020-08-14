import React from 'react';

import CommentListItem from '../comment-list-item/comment-list-item';

const CommentList = ({ fields, onDeleted }) => {

  const elements = fields.map((item) => {
    const { id, ...fields } = item;
    return (
      <span key={id}>
        <CommentListItem
          {...item}
          onDeleted={ ()  => onDeleted(id) }
          />
      </span>
    );
  });
  return (
    <ul>
      { elements }
    </ul>
  );
};


export default CommentList;
