import React from 'react';

const CardRestaurant = ({ data, loading }) => {
  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <div>
      <ul className="list-group mb-4">
        {
          data.map(data => (
            <li key={data.id} className="list-group-item">
              {data.name}
            </li>
          ))
        }
      </ul>
    </div>
  )
}
export default CardRestaurant
