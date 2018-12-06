import React, { Component } from 'react'
import { HashRouter, Route, Switch,Redirect } from 'react-router-dom'
import Loadable from "react-loadable";
import App from './app'
// import Home from './pages/home'
// import About from './pages/about'
// import Contact from './pages/contact'

const loadingComponent = ({ isLoading, error }) => {
    // Handle the loading state
    if (isLoading) {
        return <div>Loading...</div>;
    }
    // Handle the error state
    else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    }
    else {
        return null;
    }
};
const Home = Loadable({
    loader: () => import('./pages/home'),
    loading: loadingComponent
});
const About = Loadable({
    loader: () => import('./pages/about'),
    loading: loadingComponent
});
const Contact = Loadable({
    loader: () => import('./pages/contact'),
    loading: loadingComponent
});

function NoMatch({ location }) {
    return (
      <div>
        <h3>
          No match for <code>{location.pathname}</code>
        </h3>
      </div>
    );
}

const isAuthenticated = false;  //判断登录
function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route {...rest} render={
            props => isAuthenticated ? (<Component {...props} />) : (<Redirect to={{pathname: "/home"}}/>)
        }/>
    );
}

export default class router extends Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route exact path="/" render={() => (<Redirect to="/home"/>)}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/about/:id" component={About} />
                        <PrivateRoute path="/contact" component={Contact} />  
                        <Route component={NoMatch} />
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}

