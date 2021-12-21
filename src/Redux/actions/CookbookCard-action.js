import {SET_COOKBOOK} from "../action-types/CookbookCard-action-types"

export const setCookbookCard = (data) => {
    return {
        type: SET_COOKBOOK,
        payload: data
    }
}