function postComments(state = [], action) {
  switch (action.type) {
    case "ADD_COMMENT":
      // return the existing state + new comment
      return [
        ...state,
        {
          user: action.author,
          text: action.comment,
        },
      ];
    case "REMOVE_COMMENT":
      console.log("removing a comment");
      console.log(action);
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    default:
      return state;
  }
}

function comments(state = [], action) {
  if (typeof action.postId !== "undefined") {
    return {
      // take the current state
      ...state,
      // overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action),
    };
  }
  return state;
}

export default comments;
