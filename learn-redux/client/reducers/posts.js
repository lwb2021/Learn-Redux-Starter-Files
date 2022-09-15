// create functions like listener

// reducers takes two things
// 1. the action (info about what happened)
// 2. copy of current state
/* 
action, store -> return an updated copy of store
*/

function posts(state = [], action) {
  console.log("The post will change");
  console.log(state, action);
  switch (action.type) {
    case "INCREMENT_LIKES":
      const i = action.index;
      return [
        ...state.slice(0, i),
        {
          ...state[i],
          likes: state[i].likes + 1,
        },
        ...state.slice(i + 1),
      ];
    default:
      return state;
  }
}

export default posts;
