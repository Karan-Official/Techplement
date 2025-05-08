const QuoteCard = ({ quote }) => {
    return (
        <div className="quote_card">
            <p className="quote_text">{quote.text}</p>
            <h3 className="quote_author">- {quote.author}</h3>
        </div>
    );
};

export default QuoteCard;
