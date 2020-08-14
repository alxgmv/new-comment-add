import React from 'react';

import './comment-list-item.css'

const CommentListItem  = ({ author, commentText, date, onDeleted }) => {
    return (
    <li>
      <article>
        <h3>{author}</h3>
        <p>{commentText}</p>
        <small>{date}</small>
      </article>
      <button type="button"
                className="btn btn-outline-danger btn-sm"
                onClick={onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
    </li>
    )
}

export default CommentListItem;
