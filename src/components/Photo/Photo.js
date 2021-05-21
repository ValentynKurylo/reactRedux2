import {useDispatch, useSelector} from "react-redux";
import React from "react";

const Photos = () => {
    const data = useSelector((state => state.photo))
    const dispatch = useDispatch()
    console.log(data);
    const photoFetcher = async () => {
        try {
            dispatch({type: 'START_PHOTO_LOADING'})
            const resp = await fetch('http://jsonplaceholder.typicode.com/photos')
            const data = await resp.json()

            dispatch({type: 'SET_PHOTO', payload: data})
            console.log(data);

        } catch (e) {
            console.log(e);
        } finally {
            dispatch({type: 'STOP_PHOTO_LOADING'})
        }
    }
    React.useEffect(() => {
        photoFetcher()
    }, [])
    if (data.isPhotoLoading) {
        return (<div>
            Photo are loading!!!
        </div>)
    }
    return (<div>
        {data.photo.map(({id, title, url}) => (
            <div>
            <img src={url}/>
                <p>{id} --- {title} </p></div>

        ))}
    </div>)
}

export default function Photo() {
    return (
        <div>
    <Photos/>
        </div>
    )
}