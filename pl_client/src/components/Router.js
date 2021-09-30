import React from 'react'
import {Switch, Route} from 'react-router-dom'
import AddShowForm from './AddShowForm'
import LandingPage from './LandingPage'
import ShowsContainer from './ShowsContainer'
import SuperfansContainer from './SuperfansContainer'
import Gallery from './Gallery' 

function Router() {
    return (
        <Switch>
            <Route exact path= '/' component= {LandingPage} />
            <Route exact path = '/shows' component= {ShowsContainer} />
            <Route exact path= '/superfans' component= {SuperfansContainer} />
            <Route exact path= '/addshow' component= {AddShowForm} />
            <Route exact path= '/gallery' component= {Gallery} />
        </Switch>
    )
}

export default Router
