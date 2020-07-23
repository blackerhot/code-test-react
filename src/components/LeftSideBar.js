import React, { useState } from 'react';
import '../styles/RestaurantPageStyle.css';
import CheckBoxGroup from './CheckBoxGroup';
import CategoriesFilter from '../constant/categoriesFilter';
import NeighborhoodFilter from '../constant/neighborhoodFilter'

const LeftSideBar = ({ onSorting }) => {
  const [filters, setfilters] = useState({
    category: [],
    neighborhood: []
  });

  const handleFilters = (filter, typeFilter) => {
    const newFilters = { ...filters };
    // push to category or neightbor
    newFilters[typeFilter] = filter;
    // update history
    setfilters(newFilters);
    // back
    onSorting(filter, filters, typeFilter);
  }

  return (
    <div>
      <div className="d-flex flex-column form-check pl-5" >
        <label className="form-check-label mb-1">Categories (Optional)</label>
        <CheckBoxGroup FiltersList={CategoriesFilter} handleFilters={filters => handleFilters(filters, "category")} />
      </div>
      <div className="d-flex flex-column form-check pl-5 mt-4" >
        <label className="form-check-label">Neighborhood (Optional)</label>
        <CheckBoxGroup FiltersList={NeighborhoodFilter} handleFilters={filters => handleFilters(filters, "neighborhood")} />
      </div>
    </div>
  )
}
export default LeftSideBar
