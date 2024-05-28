import React, { useState } from 'react';
import  {useSearch} from './SearchContext';
import { Link } from 'react-router-dom';
import './App.css';

const Search = () => {
  const { handleSearch } = useSearch();
  const [text, setText] = useState('');



  const handleInputChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    handleSearch(newText);
  };

  const clearSearch = () => {
    setText('');
    handleSearch('');
  };



  return (
    <div className="search">
      <input className='input-search'
        type="text"
        placeholder="Search..."
        value={text}
        onChange={handleInputChange}
  
        />
       <button className='search-button'><Link to="/search" className='search-link'>Search</Link></button>
      <button className='clear-button' onClick={clearSearch}>x</button>
    </div>
  );
};

export default Search;
