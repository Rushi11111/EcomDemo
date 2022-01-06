import {all,call,takeLatest, put} from "redux-saga/effects";
import {userActionTypes} from "../user/user.types";
import {emptyCart} from "./cart.actions";

export function* emptyCartSaga() {
    yield put(emptyCart())
}

export function* onClearCart() {
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, emptyCartSaga)
}

export function* CartSaga() {
    yield all([call(onClearCart)])
}