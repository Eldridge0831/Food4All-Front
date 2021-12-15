import {FULL_RECIPE} from "../action-types/RecipeCard-action-types";

export const setRecipeCard = (data) => {
    return {
        type: FULL_RECIPE,
        payload: data
    }
}