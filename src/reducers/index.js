const fields = (state =[], action) => {
console.log( action.type, action.id )
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state, { id: action.id,
                    author: action.author,
                    commentText: action.commentText,
                    date: new Date().toLocaleString() }
      ]
    case 'DELETE_COMMENT':
      return [...state.slice(0, action.id), ...state.slice(action.id+1)];






    default:
      return state;
  }
}

export default fields;
