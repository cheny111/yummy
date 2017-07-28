let user={
  isAuthenticated:false,
  currentUser:''
}

function accountReducer(state=user,action){
  switch(action.type){
    case "SIGN_IN":
      return {...state,isAuthenticated:true,currentUser:action.username}
    case "LOG_OUT":
      return {...state,isAuthenticated:false,currentUser:''}
    default:
      return state
  }
}
export default accountReducer;
