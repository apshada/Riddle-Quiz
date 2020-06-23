import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import useCounter from './counter'
import HomeScreen from './HomeScreen'

class Routes extends React.Component {
    render(){
        return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomeScreen} />
                <Route  path="/counter" component={useCounter} />
            </Switch>
        </BrowserRouter>
        );
    }
    // <BrowserRouter>
    //     <Switch>
    //         <Route exact path="/" component={HomeScreen} />
    //         <Route  path="/counter" component={useCounter} />
    //     </Switch>
    // </BrowserRouter>
}

export default Routes;