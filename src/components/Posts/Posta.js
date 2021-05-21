import {useDispatch, useSelector} from "react-redux";
import React from "react";


const Post = () =>{
  const data = useSelector(state => state.posts)
    const dispatch = useDispatch()
  console.log(data);
  const postsFetcher = async()=>{
    try {
        dispatch({type: 'START_POSTS_LOADING'})
const resp = await fetch('http://jsonplaceholder.typicode.com/posts')
        const data = await resp.json()

        dispatch({type: 'SET_POSTS', payload: data})
        console.log(data);

    }
    catch (e){
      console.log(e);
    }
    finally {
        dispatch({type: 'STOP_POSTS_LOADING'})
    }
  }
  React.useEffect(()=>{
      postsFetcher()
  }, [])
    if(data.isPostsLoading){
        return (<div>
            Posts are loading!!!
        </div>)
    }
  return (<div>
      {data.posts.map(({id, title, body})=> (
          <p>{id} --- {title} --- {body}</p>
      ))}
  </div>)
}

export default function Posts() {
    return (
        <div>
            <Post/>
        </div>
    )
}