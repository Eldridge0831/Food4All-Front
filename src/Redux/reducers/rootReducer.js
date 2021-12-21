import { combineReducers } from "redux";
import { singleItemReducer } from "./ItemCardReducer";
import { singleRecipeReducer } from "./RecipeCardReducer";
import { commentsReducer } from "./CommentPushReducer";
import { cookbookCardReducer } from "./CookbookCardReducer";



const rootReducer = combineReducers({
    singleItemReducer,
    singleRecipeReducer,
    commentsReducer,
    cookbookCardReducer,
})

export default rootReducer;