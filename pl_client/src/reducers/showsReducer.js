export const showsReducer = (state= [], action) => {
    switch(action.type){
        case 'FETCH_SHOWS':
            return action.payload
        case 'POST_SHOW':
            return [...state, action.payload]
        default: return state

    }
}