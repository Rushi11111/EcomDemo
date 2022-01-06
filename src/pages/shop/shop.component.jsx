import React, {useEffect} from "react";
import {Route} from "react-router-dom";
import {connect} from "react-redux";
import {fetchCollectionStart} from "../../redux/shop/shop.actions";
import {CollectionsOverviewContainer} from "../../components/collections-overview/collections-overview.container";
import {CollectionPageContainer} from "../collection/collection.container";

const ShopPage = ({fetchCollectionStart, match, ...otherProps}) =>
{
    useEffect(() => {fetchCollectionStart()},[fetchCollectionStart])

    return (
        <div className={'shop-page'}>
            <Route exact path={`${match.path}`}
                   component={CollectionsOverviewContainer} {...otherProps}/>
            <Route
                path={`${match.path}/:collectionId`}
                component={CollectionPageContainer} {...otherProps}/>}/>
        </div>
    );
}



const mapDispatchToProps = dispatch => ({
    fetchCollectionStart: () => dispatch(fetchCollectionStart())
})

export default connect(null,mapDispatchToProps)(ShopPage);