import React,{useReducer} from 'react'
import Button from '@mui/material/Button';
const initialState = {count:0}
const reducer=(state,action) => {

switch (action.type) {
    case "increase":
        return {count:state.count+1}
    case "decrease":
        return {count:state.count-1}

    default:
        return state
}
}
function UseReducerHook() {
    const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <div>
        <h1 >{state.count}</h1>
        <Button onClick={()=>dispatch({type:"increase"})} variant="contained" sx={{ m: '1rem' }}>increase</Button>
        <Button onClick={()=>dispatch({type:"decrease"})} variant="contained">decrease</Button>
   
    </div>
  )
}

export default UseReducerHook