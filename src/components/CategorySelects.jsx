import { selectFilters } from '../data/sections.js';

const scrollToSection = (sectionId) => {
  if (!sectionId) return;
  const node = document.getElementById(sectionId);
  if (node) {
    node.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const CategorySelects = () => {
  const handleChange = (event) => {
    scrollToSection(event.target.value);
    event.target.value = '';
  };

  return (
    <div className="bar-container" id="bar-container">
      {selectFilters.map((filter) => (
        <select
          key={filter.id}
          name={filter.id}
          id={filter.id}
          className={filter.id}
          defaultValue=""
          onChange={handleChange}
        >
          <option value="">{filter.label}</option>
          {filter.options.map((option) => (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ))}
    </div>
  );
};

export default CategorySelects;
