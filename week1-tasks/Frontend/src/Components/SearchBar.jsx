// import { useState } from 'react';

// const SearchBar = ({ onSearch }) => {
//     const [author, setAuthor] = useState('');

//     const handleInputChange = (e) => {
//         setAuthor(e.target.value);
//     };

//     const handleSearch = () => {
//         onSearch(author);
//     };

//     return (
//         <div className="search_bar">
//             <input
//                 type="text"
//                 placeholder="Search quotes by author..."
//                 value={author}
//                 onChange={handleInputChange}
//             />
//             <button onClick={handleSearch}>Search</button>
//         </div>
//     );
// };

// export default SearchBar;


// SearchBar.jsx
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [author, setAuthor] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value;
        setAuthor(value);
        onSearch(value);  // Call onSearch directly as user types
    };

    return (
        <div className="search_bar">
            <input
                type="text"
                placeholder="Search quotes by author..."
                value={author}
                onChange={handleInputChange} // Trigger search on every keystroke
            />
        </div>
    );
};

export default SearchBar;
