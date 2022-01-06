import {takeLatest, all, call, put} from 'redux-saga/effects'

import ShopActionTypes from "./shop.types";
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase.utils";
import {fetchCollectionsSuccess} from "./shop.actions";

export function* fetchCollectionAsync() {
    try {
        const collectionRef = firestore.collection('collections')
        const snapshot = yield collectionRef.get()
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
        yield put(fetchCollectionsSuccess(collectionsMap))
    } catch(err) {
        yield put(err.message)
    }
}

export function* fetchCollectionStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionAsync
    )
}

export function* ShopSaga() {
    yield all([call(fetchCollectionStart)])
}