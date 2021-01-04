import React from 'react';
import './search-box.styles.css';

// functional component
// if you don't need internal state or life cycle method,
// use functional component because it's easier to read
export const SearchBox = ({ placeholder, handleChange }) => (
    <input 
        className = 'search'
        type='search' 
        placeholder={placeholder} 
        onChange= {handleChange}
    />

);