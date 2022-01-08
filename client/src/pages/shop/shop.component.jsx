import React, {useEffect} from "react";
import {Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchCollectionStart} from "../../redux/shop/shop.actions";
import {CollectionsOverviewContainer} from "../../components/collections-overview/collections-overview.container";
import {CollectionPageContainer} from "../collection/collection.container";
import {selectIsCollectionFetching} from "../../redux/shop/shop.selector";

const ShopPage = ({match}) =>
{
    const dispatch = useDispatch();
    useEffect(() => {dispatch(fetchCollectionStart())},[dispatch])
    return (
        <div className={'shop-page'}>
            <Route exact path={`${match.path}`}
                   component={CollectionsOverviewContainer}/>
            <Route
                path={`${match.path}/:collectionId`}
                component={CollectionPageContainer} />
        </div>
    );
}

export default ShopPage;