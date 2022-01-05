import ShopActionTypes from "./shop.types";
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

export const fetchCollectionStart = () => (
    {
        type: ShopActionTypes.FETCH_COLLECTIONS_START,
    }
)

export const fetchCollectionsSuccess = collectionMap => ({
    type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: collectionMap
})

export const fetchCollectionFailure = err => ({
    type: ShopActionTypes.FETCH_COLLECTION_FAIL,
    payload: err
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
            const collectionRef = firestore.collection('collections')
            collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            dispatch(fetchCollectionsSuccess(collectionsMap));
        }).catch(err => dispatch(fetchCollectionFailure(err.message)))
    }
}

