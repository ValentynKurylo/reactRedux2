import {useDispatch, useSelector} from "react-redux";
import React from "react";

const User = () => {
    const data = useSelector((state => state.users))
    const dispatch = useDispatch()
    console.log(data);
    const usersFetcher = async () => {
        try {
            dispatch({type: 'START_USER_LOADING'})
            const resp = await fetch('http://jsonplaceholder.typicode.com/users')
            const data = await resp.json()

            dispatch({type: 'SET_USER', payload: data})
            console.log(data);

        } catch (e) {
            console.log(e);
        } finally {
            dispatch({type: 'STOP_USER_LOADING'})
        }
    }
    React.useEffect(() => {
        usersFetcher()
    }, [])
    if (data.isUserLoading) {
        return (<div>
            Users are loading!!!
        </div>)
    }
    return (<div>
        {data.users.map(({id, name, username, email}) => (


            <p>{id} --- {name} --- {username} --- {email} </p>

        ))}
    </div>)
}

export default function Users() {
    return (
        <div>
            <User/>
        </div>
    )
}