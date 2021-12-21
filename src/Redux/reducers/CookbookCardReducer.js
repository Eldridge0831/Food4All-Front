import { SET_COOKBOOK } from "../action-types/CookbookCard-action-types";

const initialState = []

export const cookbookCardReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_COOKBOOK:
            return state = [action.payload]
        default:
            return state;
    }
}