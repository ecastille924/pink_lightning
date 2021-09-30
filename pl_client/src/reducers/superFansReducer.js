export const superfansReducer = (state= [], action) => {
    switch(action.type){
        case 'FETCH_SUPERFANS':
            return action.payload
        case 'POST_SUPERFAN':
            return [...state, action.payload]
        default: return state

    }
}