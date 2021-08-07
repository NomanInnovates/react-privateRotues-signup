import React from 'react'
import {BrowserRouter as Router, Route, Switch}  from 'react-router-dom'
import Header from '../commonComp/header/Header'
import Footer from '../commonComp/footer/Footer'
import Home from '../modules/home/Home'
import Profile from '../modules/profile/Profile'
import SignUp from '../modules/auth/signUp/SignUp'
import Login from '../modules/auth/login/Login'
import LandingPage from '../modules/landingPage/LandingPage'
import Privateroute from './PrivateRouting'
import PublicRoute from './PublicRouting'
function Navigation() {
    const loginState = true;
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <LandingPage />
                </Route>
                <PublicRoute exact path="/signup" auth={loginState}>
                    <SignUp />
                </PublicRoute>
                {/* public rout */}
                <PublicRoute exact path="/login" auth={loginState} >
                    <Login />
                </PublicRoute>
                {/* Private Routes */}
                <Privateroute  exact path="/home"  auth={loginState} >
                    <Home />
                </Privateroute>
                <Privaterouting  exact path="/profile"  auth={loginState} >
                    <Profile />
                </Privaterouting>
            </Switch>
            <Footer/>
        </Router>
    )
}

export default Navigation
