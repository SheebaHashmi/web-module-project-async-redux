import axios from "axios";

export const FETCH_QUOTES_START = "FETCH_QUOTES_START";
export const FETCH_QUOTES_SUCCESS = "FETCH_QUOTES_SUCCESS";
export const FETCH_QUOTES_FAILURE = "FETCH_QUOTES_FAILURE";

export const getQuotes = () => dispatch => {
    dispatch({type:FETCH_QUOTES_START});
    axios.get('https://programming-quotes-api.herokuapp.com/quotes/random')
    .then(res => {
        dispatch({type:FETCH_QUOTES_SUCCESS,payload:res.data})
    })
    .catch(err =>{
        dispatch({type:FETCH_QUOTES_FAILURE,payload:err.message})
    })
}
