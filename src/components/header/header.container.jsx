import React from "react";
import {Query} from "react-apollo";
import {gql} from "apollo-boost";

import Header from "./header.component";
import {GET_CART_HIDDEN} from "../../graphql/resolvers";

const HeaderContainer = () => (
    <Query query={GET_CART_HIDDEN}>
        {
            ({data: {cartHidden}}) => <Header hidden={cartHidden}/>
        }
    </Query>
)

export default HeaderContainer