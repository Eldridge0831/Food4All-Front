import {SHOW_NUTRITION} from "../action-types/ItemCard-action-types";

export const setItemCard = (data) => {
    return {
        type: SHOW_NUTRITION,
        payload: data
    }
}