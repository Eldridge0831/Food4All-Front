import { combineReducers } from "redux";
import { singleItemReducer } from "./ItemCardReducer";
import { singleRecipeReducer } from "./RecipeCardReducer";
import { commentsReducer } from "./CommentPushReducer";
import { buttonReducer } from "./ButtonChangeReducer";



const rootReducer = combineReducers({
    singleItemReducer,
    singleRecipeReducer,
    commentsReducer,
    buttonReducer,
})

export default rootReducer;