import {Route, Switch} from 'react-router-dom';

import './App.css';
import MenuComponent from './components/menucomponent'
import LoginComponent from './components/logincomponent';
import CompaniesListComponent from './components/companieslistcomponent';
import WatchListComponent from './components/watchlistcomponent';
import PerformanceComponent from './components/performancecomponent';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: null
    }
  }

  logout = () => {
    this.setState({
      isLoggedIn: false,
      user: null
    })
  }

  login = (user) => {
    this.setState({
      isLoggedIn: true,
      user: user
    })
  }

  render() {
    return (
      <div className="App">
        <MenuComponent isLoggedIn={this.state.isLoggedIn} logout={this.logout}/>
        
        <Switch>
          <Route 
            path="/" exact
            render={
              this.state.isLoggedIn
              ? (props) => <CompaniesListComponent {...props} isLoggedIn={this.state.isLoggedIn} user={this.state.user}/>
              : (props) => <LoginComponent {...props} login={this.login}/>
            }
          />

          <Route 
            path="/companies-list" exact 
            render={
              (props) => <CompaniesListComponent {...props} isLoggedIn={this.state.isLoggedIn} user={this.state.user}/>
            }
          />

          <Route 
            path="/watch-list" exact 
            render={
              (props) => <WatchListComponent {...props} isLoggedIn={this.state.isLoggedIn} user={this.state.user}/>
            }
          />

          <Route 
            path="/compare-performance" exact 
            render={
              (props) => <PerformanceComponent {...props} isLoggedIn={this.state.isLoggedIn}/>
            }
          />

          <Route 
            path="/login" exact 
            render={
              this.state.isLoggedIn
              ? (props) => <CompaniesListComponent {...props} isLoggedIn={this.state.isLoggedIn} user={this.state.user}/>
              : (props) => <LoginComponent {...props} login={this.login}/>
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
