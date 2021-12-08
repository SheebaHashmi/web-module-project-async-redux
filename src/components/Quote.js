
import React from 'react';

import {connect} from 'react-redux';
import { getQuotes } from '../actions';

const Quote = (props) => {
    const handleClick = () => {
        props.getQuotes()
    }
    return(
        <div className="container">
            <h1>Your quote of the day:</h1>
            {
                props.loading && <p>Loading.....</p>
            }
            {
                props.quote && 
                <div className="quote-card">
                    <h1>{props.quote.en}</h1>
                    <h3>{props.quote.author}</h3>
                </div>
            }
            {
                props.error && <p className="error">{props.error}</p>
            }
           <button className="btn" onClick = {handleClick}>...</button>
           
        </div>
    )
}
const mapStateToProps = state =>({
        quote: state.quote,
        error: state.error,
        laoding:state.loading
    })

export default  connect(mapStateToProps,{getQuotes})(Quote);