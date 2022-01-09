import React from "react";
import {Query, Mutation} from "react-apollo";
import {gql} from "apollo-boost";

import CartDropdown from "./cart-dropdown.component";
import {TOGGLE_CART_HIDDEN} from "../cart-icon/cart-icon.container";
import Spinner from "../spinner/spinner.component";

const GET_CART_ITEMS = gql`
    {
        cartItems @client
    }
`

const CartDropdownContainer = () => (
    <Mutation mutation={TOGGLE_CART_HIDDEN}>
        {
            toggleCartHidden => (
                <Query query={GET_CART_ITEMS}>
                    {
                        ({data}) => {
                            return <CartDropdown toggleCartHidden={toggleCartHidden} cartItems={data.cartItems}/>
                        }
                    }
                </Query>
            )
        }
    </Mutation>
)


export default CartDropdownContainer;