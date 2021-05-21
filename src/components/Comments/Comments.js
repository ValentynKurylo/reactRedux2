import {useDispatch, useSelector} from "react-redux";
import React from "react";


const Comment = () =>{
  const data = useSelector((state => state.comments))
    const dispatch = useDispatch()
  console.log(data);
  const commentsFetcher = async()=>{
    try {
        dispatch({type: 'START_COMMENTS_LOADING'})
const resp = await fetch('http://jsonplaceholder.typicode.com/comments')
        const data = await resp.json()

        dispatch({type: 'SET_COMMENTS', payload: data})
        console.log(data);

    }
    catch (e){
      console.log(e);
    }
    finally {
        dispatch({type: 'STOP_COMMENTS_LOADING'})
    }
  }
  React.useEffect(()=>{
      commentsFetcher()
  }, [])
    if(data.isCommentsLoading){
        return (<div>
            Comments are loading!!!
        </div>)
    }
  return (<div>
      {data.comments.map(({id, name, email,  body})=> (
          <p>{id} --- {name} --- {email} --- {body}</p>
      ))}
  </div>)
}

export default function Comments() {
    return (
        <div>
            <Comment/>
        </div>
    )
}