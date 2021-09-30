export const fetchSuperfans= () => {
    return (dispatch) => {
        fetch('http://localhost:3000/superfans')
        .then(resp => resp.json())
        .then(superfans => dispatch({type: 'FETCH_SUPERFANS', payload: superfans}))
    }
}