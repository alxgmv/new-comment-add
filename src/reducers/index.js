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
      return state.filter(item => item.id !==action.id);






    default:
      return state;
  }
}

export default fields;
