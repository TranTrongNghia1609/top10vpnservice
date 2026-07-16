export default function FilterBar({ filters, activeFilter, onFilterChange }) {
  return (
    <div id="filter-bar" className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
      {filters.map((filter) => (
        <button
          key={filter.id}
          id={`filter-${filter.id}`}
          onClick={() => onFilterChange(filter.id)}
          className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 border ${
            activeFilter === filter.id
              ? 'bg-brand text-white border-brand shadow-md shadow-brand/20 scale-105'
              : 'bg-white text-gray-500 border-border-soft hover:border-brand hover:text-brand hover:shadow-sm'
          }`}
        >
          <span>{filter.icon}</span>
          <span>{filter.label}</span>
        </button>
      ))}
    </div>
  )
}
