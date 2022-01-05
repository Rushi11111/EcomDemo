import React from "react";
import {Route} from "react-router-dom";
import {connect} from "react-redux";
import {fetchCollectionStart} from "../../redux/shop/shop.actions";
import {CollectionsOverviewContainer} from "../../components/collections-overview/collections-overview.container";
import {CollectionPageContainer} from "../collection/collection.container";

class ShopPage extends React.Component
{
    componentDidMount() {
        this.props.fetchCollectionStart()
    }

    render() {
        return (
            <div className={'shop-page'}>
                <Route exact path={`${this.props.match.path}`}
                       component={CollectionsOverviewContainer} {...this.props}/>
                <Route
                    path={`${this.props.match.path}/:collectionId`}
                    component={CollectionPageContainer} {...this.props}/>}/>
            </div>
        );
    }
}



const mapDispatchToProps = dispatch => ({
    fetchCollectionStart: () => dispatch(fetchCollectionStart())
})

export default connect(null,mapDispatchToProps)(ShopPage);