import TrackIncome from './TrackIncome'
import { BrowserRouter,Route,Switch,Link } from 'react-router-dom'

const Home = ({income}) => {

    const routelink = [
        {
            name: "Press to enter the app",
            to: "/TrackIncome",
        },
    ]
    return (
        <BrowserRouter>
            <div>
            <h1>DICT ReactJS Project</h1>
            <h6>by: Jonathan Postrado</h6><br />
            {routelink.map(({name, to}) =>
                <Link className="waves-effect waves-light btn" to={to} key={name}>{name}</Link>
            )}
            </div><br />
            
            <Switch>
                <Route exact path="/TrackIncome" children={<TrackIncome/>}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Home;