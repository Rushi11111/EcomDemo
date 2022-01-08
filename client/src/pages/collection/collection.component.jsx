import React from "react";
import './collection.styles.scss';
import CollectionItem from "../../components/collection-item/collection-item.component";
import { useSelector} from 'react-redux';
import {selectCollection} from "../../redux/shop/shop.selector";
import {useParams} from "react-router-dom";

const CollectionPage = () => {
    const {collectionId}  = useParams();
    const obj  = useSelector(selectCollection(collectionId));
    const {title,items} = obj
    return (
        <div className={'collection-page'}>
            <h2 className={'title'}>{title}</h2>
            <div className={'items'}>
                {items.map(item => (
                    <CollectionItem className = {'collection-item'} key={item.id} item = {item}/>
                ))}
            </div>
        </div>
    );
}


export default CollectionPage;
