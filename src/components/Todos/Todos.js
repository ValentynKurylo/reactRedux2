import {useDispatch, useSelector} from "react-redux";
import React from "react";


const Todos1 = () =>{
  const data = useSelector((state => state.todos))
    const dispatch = useDispatch()
  console.log(data);
  const todosFetcher = async()=>{
    try {
        dispatch({type: 'START_TODOS_LOADING'})
const resp = await fetch('http://jsonplaceholder.typicode.com/todos')
        const data = await resp.json()

        dispatch({type: 'SET_TODOS', payload: data})
        console.log(data);

    }
    catch (e){
      console.log(e);
    }
    finally {
        dispatch({type: 'STOP_TODOS_LOADING'})
    }
  }
  React.useEffect(()=>{
      todosFetcher()
  }, [])
    if(data.isTodosLoading){
        return (<div>
            Todos are loading!!!
        </div>)
    }
  return (<div>
      {data.todos.map(({id, title, completed})=> (
          <p>{id} --- {title} --- {completed.toString()} </p>
      ))}
  </div>)
}

export default function Todos() {
    return (
        <div>
            <Todos1/>
        </div>
    )
}