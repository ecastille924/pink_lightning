export const fetchShows = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/shows')
        .then(resp => resp.json())
        .then(shows => dispatch({type: 'FETCH_SHOWS', payload: shows}))
    }
}

export const postShow = (show) => {
    return (dispatch) => {
        fetch('http://localhost:3000/shows', {
            method: 'POST',
            body: JSON.stringify(show),
            headers: { 'Content-type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(show => dispatch({type: "POST_SHOW", payload: show}))
    
    }
}