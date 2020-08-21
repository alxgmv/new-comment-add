let nextId = 3;

export const addComment = (author, commentText) => {
  return {
    type: 'ADD_COMMENT',
    id: nextId++,
    author,
    commentText
  }
}

export const deleteComment = (id) => {
  return {
    type: 'DELETE_COMMENT',
    id
  }
}
