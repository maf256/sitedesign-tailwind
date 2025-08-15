import { Search, X } from 'lucide-react';

export default function SearchInput({ value, onChange, placeholder, resultsCount, totalCount }) {
  const handleClear = () => {
    onChange('');
  };

  const searchId = 'work-experience-search';
  const resultsId = 'search-results-status';

  return (
    <div className="max-w-lg mx-auto" role="search" aria-labelledby="search-heading">
      <h2 id="search-heading" className="sr-only">Search Work Experience</h2>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none" aria-hidden="true">
          <Search className="h-5 w-5 text-content/40" />
        </div>
        <input
          id={searchId}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="block w-full pl-12 pr-12 py-4 border border-gray-200/50 rounded-2xl 
                     bg-gray-50/30 text-content placeholder-content/50 font-old-standard
                     focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary/30 focus:bg-base
                     transition-all duration-200 ease-in-out
                     hover:border-gray-300/60 hover:bg-gray-50/50"
          aria-label="Search work experiences by role, company, skills, or description"
          aria-describedby={value ? resultsId : undefined}
          role="searchbox"

          aria-autocomplete="list"
        />
        {value && (
          <button
            onClick={handleClear}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-content/60 hover:text-content/80 transition-colors duration-200"
            aria-label={`Clear search term: ${value}`}
            type="button"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        )}
      </div>
      
      {/* Search results count - Live region for screen readers */}
      {value && (
        <div 
          id={resultsId}
          className="mt-3 text-center"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          <p className="text-sm text-content/80 font-old-standard">
            {resultsCount === 0 ? (
              `No work experiences found for "${value}"`
            ) : resultsCount === totalCount ? (
              `Showing all ${totalCount} work experiences`
            ) : (
              `Found ${resultsCount} of ${totalCount} work experiences matching "${value}"`
            )}
          </p>
        </div>
      )}
    </div>
  );
}