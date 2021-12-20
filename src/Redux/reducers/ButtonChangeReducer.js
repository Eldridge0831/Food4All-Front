import {BUTTON_SHIFT} from "../action-types/ButtonChange-action-types"

const initialState = []

export const buttonReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUTTON_SHIFT:
            return state = [action.payload]
        default:
            return state;
    }
}