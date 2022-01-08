import React,{useEffect} from 'react';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import {useSelector,useDispatch} from "react-redux";
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpComponent from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {checkUserSession} from "./redux/user/user.actions";
import {selectCurrentUser} from "./redux/user/user.selector";
import CheckoutPage from "./pages/checkout/checkout.component";


const App = ({match}) => {
    const currentUser = useSelector(selectCurrentUser)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(checkUserSession())
    },[dispatch])

    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path = '/checkout' component = {CheckoutPage} />
                <Route path='/shop' component={ShopPage} />
                <Route exact path='/signin'
                       render={ () => currentUser ?
                           (<Redirect to = '/' />)
                           :
                           (<SignInAndSignUpComponent />) }
                />

            </Switch>
        </div>
    );
}

export default withRouter(App);
