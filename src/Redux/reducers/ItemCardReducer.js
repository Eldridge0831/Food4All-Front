import { SHOW_NUTRITION } from "../action-types/ItemCard-action-types";

const initialState = []

export const singleItemReducer = (state = initialState, action) => {
    switch(action.type) {
        case SHOW_NUTRITION:
            return state = [action.payload]
        default:
            return state;
    }
}