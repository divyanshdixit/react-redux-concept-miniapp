import { BUY_ICECREAM } from "./icecreamTypes"

const init = {
    numOfIcecreams: 20
}
const icecreamReducer = (state=init, action) => {
    switch(action.type){
        case BUY_ICECREAM:
            return {
                ...state, 
                numOfIcecreams:state.numOfIcecreams - 1
            }
        default:
            return state
    }
}

export default icecreamReducer;