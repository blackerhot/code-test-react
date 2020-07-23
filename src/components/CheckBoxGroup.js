import React, { useState } from 'react';
import { Checkbox } from 'antd';
import '../styles/RestaurantPageStyle.css';

const CheckBoxGroup = (props) => {
  const [checked, setChecked] = useState([]);

  const handleFilters = (valId) => {
    const currentIndex = checked.indexOf(valId);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      // checked push if not exist
      newChecked.push(valId);
    } else {
      // uncheck remove last index
      newChecked.splice(currentIndex, 1)
    }
    setChecked(newChecked);
    // send back newcheck
    props.handleFilters(newChecked);
  };
  return (
    <div className="d-flex flex-column">
      {
        props.FiltersList.map((val, index) => (
          <React.Fragment key={index}>
            <Checkbox onChange={() => handleFilters(val._id)} type="checkbox" checked={checked.indexOf(val._id) === -1 ? 0 : 1} >
              {val.name}
            </Checkbox>
          </React.Fragment>
        ))
      }
    </div>

  )
}

export default CheckBoxGroup
