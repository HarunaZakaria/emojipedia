import React from 'react';

const Search = () => {
  return (
    <div>
      <form className="d-flex search" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-primary" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
