import React from "react";
import {Mutation} from "react-apollo";
import CollectionItem from "./collection-item.component";
import {gql} from "apollo-boost";

const ADD_CART_ITEM = gql`
    mutation AddItemToCart($item: Item!) {
        addItemToCart(item: $item) @client
    }
`

const CollectionItemContainer = (props) => (
    <Mutation mutation={ADD_CART_ITEM}>
        {
            (addItemToCart) => (
                <CollectionItem
                    {...props}
                    addItem = {item => addItemToCart({variables: {item}})}
                />
            )
        }
    </Mutation>
)

export default CollectionItemContainer;