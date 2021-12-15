import {FULL_RECIPE} from "../action-types/RecipeCard-action-types";

const initialState = []

export const singleRecipeReducer = (state = initialState, action) => {
    switch(action.type) {
        case FULL_RECIPE:
            return state = [action.payload]
        default:
            return state;
    }
}