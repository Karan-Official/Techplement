// import { useState, useEffect } from 'react';
// import QuoteCard from '../Components/QuoteCard';
// import SearchBar from '../Components/SearchBar';
// import '../CSS/Home.css';

// const Home = () => {
//     const [quote, setQuote] = useState(null);
//     const [quotesByAuthor, setQuotesByAuthor] = useState([]);

//     // useEffect(() => {
//     //     // Fetch the daily quote when the component mounts
//     //     fetch('/api/daily-quote')
//     //         .then((response) => response.json())
//     //         .then((data) => setQuote(data))
//     //         .catch((error) => console.error('Error fetching daily quote:', error));
//     // }, []);

//     // const searchQuotes = (author) => {
//     //     // Call an API to search for quotes by the author
//     //     fetch(`/api/search-quotes?author=${author}`)
//     //         .then((response) => response.json())
//     //         .then((data) => setQuotesByAuthor(data))
//     //         .catch((error) => console.error('Error searching quotes:', error));
//     // };

//     useEffect(() => {
//         // Hardcoded quote of the day
//         const dailyQuote = {
//             text: "The only way to do great work is to love what you do.",
//             author: "Steve Jobs"
//         };
//         setQuote(dailyQuote);
//     }, []);

//     const searchQuotes = (author) => {
//         // Hardcoded quotes search by author
//         const quotes = [
//             { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
//             { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
//             { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
//             { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
//             { text: "That which does not kill us makes us stronger.", author: "Friedrich Nietzsche" },
//             { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" }
//         ];
//         const filteredQuotes = quotes.filter((quote) => quote.author.toLowerCase().includes(author.toLowerCase()));
//         setQuotesByAuthor(filteredQuotes);
//     };

//     return (
//         <div className="home">
//             <h1>Quote of the Day</h1>
//             {quote ? <QuoteCard quote={quote} /> : <p>Loading...</p>}

//             <SearchBar onSearch={searchQuotes} />

//             {quotesByAuthor.length > 0 && (
//                 <div className="quotes_by_author">
//                     {quotesByAuthor.map((q, index) => (
//                         <QuoteCard key={index} quote={q} />
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Home;


import { useState, useEffect } from 'react';
import QuoteCard from '../Components/QuoteCard';
import SearchBar from '../Components/SearchBar';
import axios from 'axios';
import '../CSS/Home.css';

const Home = () => {
    const [quote, setQuote] = useState(null);
    const [quotesByAuthor, setQuotesByAuthor] = useState([]);

    useEffect(() => {
        const fetchDailyQuote = async () => {
            try {
                const response = await axios.get('http://localhost:5000/quotes/random');
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
