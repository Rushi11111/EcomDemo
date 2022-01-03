import React from "react";
import './collection.styles.scss';
import CollectionItem from "../../components/collection-item/collection-item.component";
import {connect} from 'react-redux';
import {selectCollection} from "../../redux/shop/shop.selector";

const CollectionPage = ({collection}) => {
    return (
        <div className={'collection-page'}>
            <h2 className={'title'}>{collection.title}</h2>
            <div className={'items'}>
                {collection.items.map(item => (
                    <CollectionItem className = {'collection-item'} key={item.id} item = {item}/>
                ))}
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    collection : selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
