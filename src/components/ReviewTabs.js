import React from 'react'

const ReviewTabs = (props) => {
  if (props.menuToggle[1].status) {
    return (
      <div className="container">
        Reviews!!!
      </div>
    )
  } else {
    return (<div>

    </div>)
  }
}
export default ReviewTabs
