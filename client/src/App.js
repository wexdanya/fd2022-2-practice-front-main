import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

// pages
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import StartContestPage from './pages/StartContestPage';
import ContestCreationPage from './pages/ContestCreation';
import Home from './pages/Home';
import ContestPage from './pages/ContestPage';
import Dashboard from './pages/Dashboard';
import UserProfile from './pages/UserProfile';
import Payment from './pages/Payment';
// components
import PrivateHoc from './components/PrivateHoc/PrivateHoc';
import NotFound from './components/NotFound/NotFound';
import OnlyNotAuthorizedUserHoc from './components/OnlyNotAuthorizedUserHoc/OnlyNotAuthorizedUserHoc';
import browserHistory from './browserHistory';
import ChatContainer from './components/Chat/ChatComponents/ChatContainer/ChatContainer';
import CONSTANTS from './constants';


class App extends Component {
  render () {
    return (
      <Router history={browserHistory}>
        <ToastContainer
          position='top-center'
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route
            exact
            path='/login'
            component={OnlyNotAuthorizedUserHoc(LoginPage)}
          />
          <Route
            exact
            path='/registration'
            component={OnlyNotAuthorizedUserHoc(RegistrationPage)}
          />
          <Route exact path='/payment' component={PrivateHoc(Payment)} />
          <Route
            exact
            path='/startContest'
            component={PrivateHoc(StartContestPage)}
          />
          <Route
            exact
            path='/startContest/nameContest'
            component={PrivateHoc(ContestCreationPage, {
              contestType: CONSTANTS.NAME_CONTEST,
              title: 'Company Name',
            })}
          />
          <Route
            exact
            path='/startContest/taglineContest'
            component={PrivateHoc(ContestCreationPage, {
              contestType: CONSTANTS.TAGLINE_CONTEST,
              title: 'TAGLINE',
            })}
          />
          <Route
            exact
            path='/startContest/logoContest'
            component={PrivateHoc(ContestCreationPage, {
              contestType: CONSTANTS.LOGO_CONTEST,
              title: 'LOGO',
            })}
          />
          <Route exact path='/dashboard' component={PrivateHoc(Dashboard)} />
          <Route
            exact
            path='/contest/:id'
            component={PrivateHoc(ContestPage)}
          />
          <Route exact path='/account' component={PrivateHoc(UserProfile)} />
          <Route component={NotFound} />
        </Switch>
        <ChatContainer />
      </Router>
    );
  }
}

export default App;
