

const defaultState = {
    list: ""
}

interface State {
    list: string
}

const ADD_TEXT = "ADD_TEXT"

export const firstreducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TEXT:
            return {...state, list: action.payload}

    }
}

