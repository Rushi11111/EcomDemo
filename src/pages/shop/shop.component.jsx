import React from "react";
import CollectionsOverview from "../../components/collections-overview/collection-overview.component";
import {Route} from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import {firestore, convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils";
import {connect} from "react-redux";
import {updateCollections} from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component
{
    constructor() {
        super();

        this.state = {
            loading: true
        }
    }
    unsubscribeFromSnapShot = null;

    componentDidMount() {
        console.log("Fires")
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections')
        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionsMap);
            this.setState({loading:false});
        })
    }

    render() {
        const {loading} = this.state;

        return (
            <div className={'shop-page'}>
                <Route exact path={`${this.props.match.path}`}
                       render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props}/>}/>
                <Route
                    path={`${this.props.match.path}/:collectionId`}
                    render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>}/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collections => dispatch(updateCollections(collections))
})

export default connect(null,mapDispatchToProps)(ShopPage);