import React from "react";
import {Link} from 'react-router-dom'
import './header.styles.scss'
import {ReactComponent as Logo} from "../../Asset/crown.svg";
import {auth} from '../../firebase/firebase.utils';
import {connect} from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import {selectCartHide} from "../../redux/cart/cart.selector";
import {selectCurrentUser} from "../../redux/user/user.selector";
import {signOutStart} from "../../redux/user/user.actions";

const Header = ({currentUser, hide, signOutStart}) => (
    <div className={'header'}>
        <Link className={'logo-container'} to="/">
            <Logo className={'logo'}/>
        </Link>
        <div className={'options'}>
            <Link className={'option'} to='/shop'>
                SHOP
            </Link>
            <Link className={'option'} to='/CONTACT'>
                CONTACT
            </Link>
            {
                currentUser ?
                    (<div className={'option'} onClick={signOutStart}>SIGN OUT</div>)
                    :
                    (<Link className={'option'} to='/signin'>SIGN IN</Link>)
            }
            <CartIcon />
        </div>
        {hide === true ? (<CartDropDown />) : (null)}
    </div>
)

const mapStateToProps = (state) => ({
        currentUser: selectCurrentUser(state),
        hide : selectCartHide(state)
    }
)

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);