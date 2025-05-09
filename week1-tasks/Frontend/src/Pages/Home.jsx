import { useState, useEffect } from 'react';
import QuoteCard from '../Components/QuoteCard';
import SearchBar from '../Components/SearchBar';
import axios from 'axios';
import '../CSS/Home.css';
import {Toggle} from "../Header_Function";

const Home = () => {
    const [quote, setQuote] = useState(null);
    const [quotesByAuthor, setQuotesByAuthor] = useState([]);

    useEffect(() => {
        Toggle();
    });

    useEffect(() => {
        const fetchDailyQuote = async () => {
            try {
                const response = await axios.get('http://localhost:5000/quotes/qod');
                setQuote(response.data.quote);
            } catch (e) {
                console.error("Error fetching the daily quote:", e);
            }
        };

        fetchDailyQuote();
    }, []);

    const searchQuotes = async (author) => {
        if (author.trim() === '') {
            setQuotesByAuthor([]);
            return;
        }

        try {
            const response = await axios.get(`http://localhost:5000/quotes/author/${author}`);
            setQuotesByAuthor(response.data.quote);
        } catch (e) {
            if (e.response && e.response.status === 404) {
                setQuotesByAuthor([]);
            }
        }
    };

    return (
        <div className="home">
            <h1>Quote of the Day</h1>
            {quote ? <QuoteCard quote={quote} /> : <p>Loading...</p>}

            <SearchBar onSearch={searchQuotes} />

            {quotesByAuthor.length > 0 && (
                <div className="quotes_by_author">
                    {quotesByAuthor.map((q, index) => (
                        <QuoteCard key={index} quote={q} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
