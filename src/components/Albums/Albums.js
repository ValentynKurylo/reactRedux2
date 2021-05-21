import {useDispatch, useSelector} from "react-redux";
import React from "react";


const Album = () =>{
  const data = useSelector((state => state.albums))
    const dispatch = useDispatch()
  console.log(data);
  const albumsFetcher = async()=>{
    try {
        dispatch({type: 'START_ALBUMS_LOADING'})
const resp = await fetch('http://jsonplaceholder.typicode.com/albums')
        const data = await resp.json()

        dispatch({type: 'SET_ALBUMS', payload: data})
        console.log(data);

    }
    catch (e){
      console.log(e);
    }
    finally {
        dispatch({type: 'STOP_ALBUMS_LOADING'})
    }
  }
  React.useEffect(()=>{
      albumsFetcher()
  }, [])
    if(data.isAlbumsLoading){
        return (<div>
            Albums are loading!!!
        </div>)
    }
  return (<div>
      {data.albums.map(({id, title})=> (
          <p>{id} --- {title} </p>
      ))}
  </div>)
}

export default function Albums() {
    return (
        <div>
            <Album/>
        </div>
    )
}