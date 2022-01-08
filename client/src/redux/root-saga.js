import {all,call} from 'redux-saga/effects';

import {usersagas} from "./user/user.sagas";
import {CartSaga} from "./cart/cart.sagas";
import {ShopSaga} from "./shop/shop.sagas";

export default function* rootsaga() {
    yield all([call(usersagas), call(CartSaga), call(ShopSaga)])
}