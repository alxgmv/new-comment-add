import React from 'react';

const CommentList = ({ fields, id }) => {
  const elements = fields.map((field, id) => {
    return (
      <ul key={id}>
        <li>{field.author}</li>
        <li>{field.commentText}</li>
        <li>{field.date}</li>

      </ul>
    )}
  )
  return (
    <ul>
      { elements }
    </ul>
  );
};


export default CommentList;
