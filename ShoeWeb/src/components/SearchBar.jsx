import React, { useState } from 'react';
import { Search } from 'lucide-react';

function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', query);
  };

  return (
    <form onSubmit={handleSearch} className="relative max-w-md w-full">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 pl-10 text-sm border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Search shoe..."
        />
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
      </div>
      <button type="submit" className="sr-only">
        Search
      </button>
    </form>
  );
}

export default SearchBar;