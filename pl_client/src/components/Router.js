import React from 'react'
import {Switch, Route} from 'react-router-dom'
import LandingPage from './LandingPage'
import ShowsContainer from './ShowsContainer'
import SuperfansContainer from './SuperfansContainer'
  
function Router() {
    return (
        <Switch>
            <Route exact path= '/home' component= {LandingPage} />
            <Route exact path = '/shows' component= {ShowsContainer} />
            <Route exact path= '/superfans' component= {SuperfansContainer} />
        </Switch>
    )
}

export default Router
