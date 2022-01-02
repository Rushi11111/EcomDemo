import React from 'react';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpComponent from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth} from './firebase/firebase.utils';
import {createUserProfileDocument} from "./firebase/firebase.utils";
import {setCurrentUser} from "./redux/user/user.actions";
import {selectCurrentUser} from "./redux/user/user.selector";
import CheckoutPage from "./pages/checkout/checkout.component";
class App extends React.Component{
    constructor() {
        super()
    }

    unsubscribeFromAuth = null

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if(userAuth != null) {
                const userRef = await createUserProfileDocument(userAuth)

                userRef.onSnapshot(snapShot => {
                    this.props.setCurrentUser(
                        {
                            id : snapShot.id,
                            ...snapShot.data()
                        }
                    )
                })
            } else {
                this.props.setCurrentUser(userAuth)
            }
        })


    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path = '/checkout' component = {CheckoutPage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route exact path='/signin'
                           render={ () => this.props.currentUser ?
                               (<Redirect to = '/' />)
                               :
                               (<SignInAndSignUpComponent />) }
                    />

                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
