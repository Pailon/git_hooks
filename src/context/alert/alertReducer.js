import { SHOW_ALERT, HIDE_ALERT } from "../types";

const handletrs = {
    [SHOW_ALERT]: (state, action) => action.payload,
    [HIDE_ALERT]: () => null,
    DEFAULT: state => state
}



export const alertReducer = (state, action)=>{
    const handler = handletrs[action.type] || handletrs.DEFAULT
    return handler(state, action)
}