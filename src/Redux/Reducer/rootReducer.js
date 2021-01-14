import {
    BUILDING,
    HEIGHT,
    MATERIAL,
    SIZE_X,
    SIZE_Y,
    RESULT,
    MESSAGE,
    TOTAL,
} from '../Actions/actionType'

const initialState = {
    building: String,
    height: String,
    material: null,
    sizeX: String,
    sizeY: String,
    result: Boolean,
    message: String,
    total: String
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUILDING:
            return {
                ...state,
                building: action.type
            }
        default: 
            return state
    }
}