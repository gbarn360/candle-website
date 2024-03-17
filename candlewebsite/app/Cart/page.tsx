'use client'

import Navbar from "../Components/Navbar"
import CartContent from "../Components/CartContent";
import { Provider } from "react-redux";
import { store } from "../State/state";
export default function Cart() {


    return (
        <Provider store={store}>
            <Navbar />
            <CartContent />
        </Provider>
    )
}