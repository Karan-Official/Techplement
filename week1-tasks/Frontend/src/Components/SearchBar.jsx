import { useState } from 'react';
import "../CSS/SearchBar.css";

const SearchBar = ({ onSearch }) => {
    const [author, setAuthor] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value;
        setAuthor(value);
        onSearch(value);
    };

    return (
        <div className="search_bar">
            <input
                type="text"
                placeholder="Search quotes by author..."
                value={author}
                onChange={handleInputChange}
                className="search_input"
            />
        </div>
    );
};

export default SearchBar;
