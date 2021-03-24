import { BUY_PASTRY } from "./pastryTypes"

export const buyPastry = (number=1) => {
    return {
        type:BUY_PASTRY,
        payload:number
    }
}