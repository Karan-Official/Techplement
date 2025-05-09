import '../CSS/QuoteCard.css';

const QuoteCard = ({ quote }) => {
    return (
        <div className="quote_card">
            <p className="quote_text q_txt">{quote.text}</p>
            <h3 className="quote_author q_txt">- {quote.author}</h3>
        </div>
    );
};

export default QuoteCard;
