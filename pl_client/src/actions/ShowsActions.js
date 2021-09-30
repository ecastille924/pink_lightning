export const fetchShows = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/shows')
        .then(resp => resp.json())
        .then(shows => dispatch({type: 'FETCH_SHOWS', payload: shows}))
    }
}