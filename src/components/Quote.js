import React from 'react';
import { connect } from 'react-redux';
import { getQuotes } from '../actions';

const Quote = (props) => {
    const handleClick = () => {
        props.getQuotes()
    }

    const url = `https://twitter.com/intent/tweet?hashtags=CodingQuotes💻&text="${props.quote.en?props.quote.en:"Invalid Quote"}"- ${props.quote.author}`
    return (
        <div className="container">

            {
                props.loading && <p>Loading.....</p>
            }
            {
                props.quote &&
                <div className="quote-card">
                    <i className="bi bi-quote"></i>
                    <h2>{props.quote.en}</h2>
                    <h3>{props.quote.author ? `- ${props.quote.author}` : ''}</h3>

                </div>
            }
            {
                props.error && <p className="error">{props.error}</p>
            }
            <a className="twitter-share-button"
                href={url}
                target="_blank"
            >
                <i className="bi bi-twitter"></i>
            </a>

            <button className="btn" onClick={handleClick}>New quote</button>
        </div>
    )
}
const mapStateToProps = state => ({
    quote: state.quote,
    error: state.error,
    laoding: state.loading
})

export default connect(mapStateToProps, { getQuotes })(Quote);