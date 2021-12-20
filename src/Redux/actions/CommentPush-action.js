import {COMMENTS_SHIFT} from "../action-types/CommentPush-action-types"

export const setComments = (data) => {
    return {
        type: COMMENTS_SHIFT,
        payload: data
    }
}