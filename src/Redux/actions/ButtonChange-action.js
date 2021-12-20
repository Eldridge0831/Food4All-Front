import {BUTTON_SHIFT} from "../action-types/ButtonChange-action-types"

export const changeButtons = (data) => {
    return {
        type: BUTTON_SHIFT,
        payload: data
    }
}