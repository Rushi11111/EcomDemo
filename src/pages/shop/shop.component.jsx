import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import {collectionsSelector} from "../../redux/shop-redux/shop.selector";
import {connect} from "react-redux";

const ShopPage = ({collections}) => (
    <div className={'shop-page'}>
        {
            collections.map(({id, ...other}) => (
                <CollectionPreview key={id} {...other} />
            ))
        }
    </div>
);

const mapStateToProps = (state) => ({
    collections: collectionsSelector(state)
})


export default connect(mapStateToProps)(ShopPage);