import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectIsCollectionsLoaded} from "../../redux/shop/shop.selector";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import {compose} from "redux";
import CollectionsOverview from "../../components/collections-overview/collection-overview.component";

const mapStateToProps = createStructuredSelector({
    isLoaded: (state) => selectIsCollectionsLoaded(state)
})

export const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

