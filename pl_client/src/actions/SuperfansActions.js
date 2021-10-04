export const fetchSuperfans= () => {
    return (dispatch) => {
        fetch('http://localhost:3000/superfans')
        .then(resp => resp.json())
        .then(superfans => dispatch({type: 'FETCH_SUPERFANS', payload: superfans.slice(Math.max(superfans.length -3, 1))}))
    }
}

export const postSuperfan = (superfan) => {
    return (dispatch) => {
        fetch('http://localhost:3000/superfans', {
            method: 'POST',
            body: JSON.stringify(superfan),
            headers: { 'Content-type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(superfan => dispatch({type: "POST_SUPERFAN", payload: superfan}))
    
    }
}