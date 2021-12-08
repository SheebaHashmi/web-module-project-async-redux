import {FETCH_QUOTES_START,FETCH_QUOTES_SUCCESS,FETCH_QUOTES_FAILURE} from '../actions'

const initialState = {
    quote:{},
    loading: false,
    error:''
}

const reducer = (state =  initialState,action) => {
    switch(action.type){
        case FETCH_QUOTES_START:
            return({
                ...state,
                loading:true,
                error:''
            });
        case FETCH_QUOTES_SUCCESS:
            return({
                quote:action.payload,
                loading:false,
                error:''
            });
        case FETCH_QUOTES_FAILURE:
            return({
                error:action.payload
            })

        default:
            return state;
    }
}

export default reducer;