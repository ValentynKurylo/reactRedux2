import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import Posts from "../Posts/Posta";
import Comments from "../Comments/Comments";
import Albums from "../Albums/Albums";
import Photo from "../Photo/Photo";
import Todos from "../Todos/Todos";
import Users from "../Users/Users";

export default function MainPage() {
    return (
        <div>
            <Router>
                <div><Link to={'/posts'}>Posts</Link></div>
                <div><Link to={'/comments'}>Comments</Link></div>
                <div><Link to={'/albums'}>Albums</Link></div>
                <div><Link to={'/photo'}>Photo</Link></div>
                <div><Link to={'/todos'}>Todos</Link></div>
                 <div><Link to={'/users'}>Users</Link></div>
              <Switch>
                  <Route path={'/posts'} component={Posts}/>
                  <Route path={'/comments'} component={Comments}/>
                  <Route path={'/albums'} component={Albums}/>
                  <Route path={'/photo'} component={Photo}/>
                  <Route path={'/todos'} component={Todos}/>
                  <Route path={'/users'} component={Users}/>
              </Switch>
            </Router>
        </div>
    )
}