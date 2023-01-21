
import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    itemList : [],
    totalQty: 0,
    allTotalPrice: 0
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        addToCart: (state, action)=> {
            
            const item = action.payload

            const existItem = state.itemList.find((seen) => seen.id === item.id)
            

           
            if (!existItem) {
                state.itemList.push(action.payload)
               
                console.log(existItem);
                state.allTotalPrice += action.payload.totalPrice * action.payload.qty
            state.totalQty = state.totalQty + action.payload.qty
            } 

        },

        removeCart: (state, action) => {
            const product = state.itemList.find((prev) => prev.id === action.payload.id)
            const cartItem = state.itemList.filter(
                (cartItem) => cartItem.id !== product.id
              );
        
              state.itemList = cartItem;
              state.allTotalPrice -= product.price * product.qty;
              state.totalQuantity -= product.qty;
            
            
        },

        increase: (state, action) => {
            const item = action.payload

            const existItem = state.itemList.find((seen) => seen.id === item.id)
          
            existItem.qty++
            
        
        },

    }   

})


export const cartActions = cartSlice.actions;
export default cartSlice;