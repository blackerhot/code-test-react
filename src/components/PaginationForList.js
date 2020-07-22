import React from 'react'

const PaginationForList = ({ cardPerPage, toTalCards, onPaginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(toTalCards / cardPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <nav>
        <ul className="pagination">
          {pageNumbers.map(number => (
            <li key={number} className="page-item">
              <a href="#" onClick={() => onPaginate(number)} className="page-link">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default PaginationForList
