// create functions like listener

// reducers takes two things
// 1. the action (info about what happened)
// 2. copy of current state
/* 
action, store -> return an updated copy of store
*/

function posts(state = [], action) {
  console.log(state, action);
  return state;
}

export default posts;
