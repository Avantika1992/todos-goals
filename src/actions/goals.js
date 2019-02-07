import API from 'goals-todos-api'

export const ADD_GOAL='ADD_GOAL'
export const REMOVE_GOAL='REMOVE_GOAL'

//Action creators- we dont need to export
//these cos we are not using
//these in any other files

function addGoal(goal){
  return{
    type:ADD_GOAL,
    goal
  }
}
function removeGoal(id){
  return{
    type:REMOVE_GOAL,
    id
  }
}
//Asynchronous Action creators-we need to
//export these cos we are using these
//in other files
export function handleAddGoal(name,cb){
  return (dispatch) =>{
    return API.saveGoal(name)
    .then((goal)=>{
      dispatch(addGoal(goal))
      cb()
    })
    .catch(()=>alert('There was an error,try again'))
  }
}

export function handleDeleteGoal(goal){
  return (dispatch)=>{

    this.props.store.dispatch(removeGoal(goal.id))
    return API.deleteGoal(goal.id)
    .catch(()=>{
      this.props.store.dispatch(addGoal(goal))
      alert('An error occured,try again.')
    })
  }
}
