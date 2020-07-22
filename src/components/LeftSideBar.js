import React from 'react'
import '../styles/RestaurantPageStyle.css'

const LeftSideBar = () => {
  return (
    <div>
      <div className="form-check pl-5 mb-5" >
        <input className="form-check-input" type="checkbox" id="autoSizingCheck"></input>
        <label className="form-check-label">Remember me</label>
      </div>
      <div className="form-check pl-5" >
        <input className="form-check-input" type="checkbox" id="autoSizingCheck"></input>
        <label className="form-check-label">Remember me</label>
      </div>
    </div>
  )
}
export default LeftSideBar
