


interface FirstState {
    list: string
}

interface action {
    type: string;
    payload: any
}

const defaultState: FirstState = {
    list: ""
}

const ADD_TEXT = "ADD_TEXT"

export const firstreducer = (state = defaultState, action: action): FirstState => {
    switch (action.type) {
        case ADD_TEXT:
            return {...state, list: action.payload}
        default:
            return state

    }
}

