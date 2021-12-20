import {COMMENTS_SHIFT} from "../action-types/CommentPush-action-types"

const initialState = []

export const commentsReducer = (state = initialState, action) => {
    switch(action.type) {
        case COMMENTS_SHIFT:
            return state = [action.payload]
        default:
            return state;
    }
}