import { BUY_PASTRY } from "./pastryTypes"

const init = {
    numOfPastry: 15
}

const pastryReducer = (state=init, action) => {
    switch(action.type){
        case BUY_PASTRY:
            return {
                ...state,
                numOfPastry:state.numOfPastry - 1
            }
        default:
            return state
    }
}

export default pastryReducer