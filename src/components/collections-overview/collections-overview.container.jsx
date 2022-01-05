import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectIsCollectionFetching} from "../../redux/shop/shop.selector";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collection-overview.component";

const mapStatesToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

export const CollectionsOverviewContainer = connect(mapStatesToProps)(WithSpinner(CollectionsOverview))