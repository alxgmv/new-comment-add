export const addComment = (author, commentText) => {
  return {
    type: 'ADD_COMMENT',
    id: `id${(+new Date()).toString(16)}`,
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
