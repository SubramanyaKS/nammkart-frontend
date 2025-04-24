import { ADD_ITEM, CLEAR_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, REMOVE_ITEM, UPDATE_QUANTITY } from "../utils/constant";
import { CartAction, CartState } from "../utils/types";


export const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case INCREASE_QUANTITY:
            // Increase the quantity of a specific item
            var increasedItemIndex = state.items.findIndex(
                (item) => item.productId === action.payload
            );

            if (increasedItemIndex !== -1) {
                const updatedCartItems = [...state.items];
                updatedCartItems[increasedItemIndex] = {
                    ...updatedCartItems[increasedItemIndex],
                    quantity: updatedCartItems[increasedItemIndex].quantity + 1,
                };

                return {
                    ...state,
                    items: updatedCartItems,
                };
            }
            else {
                return state;
            }

        case DECREASE_QUANTITY:
            var decreasedItemIndex = state.items.findIndex(
                (item) => item.productId === action.payload
            );

            if (decreasedItemIndex !== -1 && state.items[decreasedItemIndex].quantity > 1) {
                const updatedCartItems = [...state.items];
                updatedCartItems[decreasedItemIndex] = {
                    ...updatedCartItems[decreasedItemIndex],
                    quantity: updatedCartItems[decreasedItemIndex].quantity - 1,
                };

                return {
                    ...state,
                    items: updatedCartItems,
                };
            } else {
                return state;
            }
        case ADD_ITEM: {
            const existingItem = state.items.find((item) => item.productId === action.payload.productId);
            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map((item) =>
                        item.productId === action.payload.productId
                            ? { ...item, quantity: item.quantity + action.payload.quantity }
                            : item
                    ),
                };
            }
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        }
        case REMOVE_ITEM: {
            return {
                ...state,
                items: state.items.filter((item) => item.productId !== action.payload),
            };
        }
        case UPDATE_QUANTITY: {
            return {
                ...state,
                items: state.items.map((item) =>
                    item.productId === action.payload.productId
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                ),
            };
        }
        case CLEAR_CART: {
            return { items: [] };
        }
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};