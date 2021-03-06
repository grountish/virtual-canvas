import React, { useState } from 'react';
import { connect } from 'react-redux'
import CanvasesIndex from "./CanvasesIndex"
import CanvasShow from './CanvasShow'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'
import LoginModal from './components/LoginModal'
import Landing from './Landing'
import About from "./About"
import UserShow from './UserShow'
import Navbar from './components/Navbar';
import './App.scss'

const App = props => {

  const [modal,setModal] = useState(false)

  const toggleModal = () => setModal(!modal)
  
    return (
        <Router >
          <LoginModal 
            modal={modal} 
            toggleModal={toggleModal}
          />
          <Navbar
            toggleModal={toggleModal} 
          />
          <Route exact path="/" render={() => {
            return (<>
              <Landing />
              <About />
            </>)
          }}/>
          <Route exact path="/user" >
            {props.user_id ? <UserShow /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/canvases" render={routerProps => <CanvasesIndex {...routerProps} />} />
          <Route exact path="/canvases/:id" render={routerProps => (
            <CanvasShow {...routerProps} />
          )} />
        </Router>
    );
  }

const mapStateToProps = state => {
  return {
    user_id: state.user_id
  }
}

export default connect(mapStateToProps)(App);
