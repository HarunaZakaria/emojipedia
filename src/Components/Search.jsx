import React from 'react';

const Search = () => {
  return (
    <div>
      <form class="d-flex search" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-primary" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
