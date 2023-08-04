"use client"
import React, {Dispatch, createContext, useEffect, useReducer} from "react"

interface PayloadType {
  id: number;
  brand: string;
  name: string;
  description: string;
  descBullet: any[];
  price: string;
  images: string[];
  imagesSmall: string[];
}


type StateType = {
  cart: Array<any>;
}

type ActionType = {
  type: string;
  payload: PayloadType
}

const initialState: StateType = {
  cart: []
}

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cart:[...state.cart, action.payload]};
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id)}
    default:
      return state;
  }
}

export const CartContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({state: initialState, dispatch: () => null});

export const CartContextProvider = ({
  children,
}:{
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state)
  return (
    <CartContext.Provider value={{state, dispatch}}>
      {children}
    </CartContext.Provider>
  )
}
