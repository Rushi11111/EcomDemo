import React from "react";
import {connect} from "react-redux";
import './collection-overview.styles.scss';
import CollectionPreview from "../collection-preview/collection-preview.component";
import {collectionsSelector} from "../../redux/shop/shop.selector";

const CollectionsOverview = ({collections}) => (
    <div className={'collections-overview'}>
        {
            collections.map(({id, ...other}) => (
                <CollectionPreview key={id} {...other} />
            ))
        }
    </div>
)

const mapStateToProps = (state) => ({
    collections: collectionsSelector(state)
})

export default connect(mapStateToProps)(CollectionsOverview);