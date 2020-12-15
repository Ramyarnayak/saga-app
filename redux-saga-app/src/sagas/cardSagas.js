import { put, takeEvery, all, acll, take, takeLatest} from 'redux-saga/effects'
import {ADD_TO_CART, REMOVE_FROM_CART, ADD_TO_CART_SAGA, REMOVE_FROM_CART_SAGA} from '../reducers/types'

// export function* helloSaga() {
//     console.log("Hello from card saga")
// }
const total =(newCart) =>{
    let tatoatlVal=0;
    for (let i=0; i<newCart.length; i++) {
        tatoatlVal += newCart[i].price;
    }
    return tatoatlVal
}
export function* addToCartSaga(action){
    const { cart, item} = action.payload
     let hardCopy = [...cart, item];
        const newTotal = total(newCart);
        yield put ({
            type:ADD_TO_CART, payload:{newCart, newTotal}
        });
    }

    export function* watchAddToCArtSaga() {
        yield takeEvery (ADD_TO_CART_SAGA, addToCartSaga)
    }