import { combineReducers } from "redux";
import { singleItemReducer } from "./ItemCardReducer";
import { singleRecipeReducer } from "./RecipeCardReducer";



const rootReducer = combineReducers({
    singleItemReducer,
    singleRecipeReducer,
})

export default rootReducer;