import React from 'react'

const InformationTab = (props) => {
  if (props.menuToggle[0].status) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h5 className="font-weight-bold">Opening hours</h5>
            <p className="font-detail">{props.dataList.opening_hours[0].day_interval}
              <br></br>
              {props.dataList.opening_hours[0].opening_hour} - {props.dataList.opening_hours[0].closing_hour}
            </p>
          </div>
          <div className="col-sm">
            <h5 className="font-weight-bold">Details</h5>
            <p className="font-detail">{props.dataList.description}</p>
            <h5 className="font-weight-bold">Neighbourhood</h5>
            <p className="font-detail">{props.dataList.district}</p>
          </div>
          <div className="col-sm">
            <h5 className="font-weight-bold">Location</h5>
            <p className="font-detail">{props.dataList.address}</p>
            <h5 className="font-weight-bold">Website</h5>
            <p className="font-detail">{props.dataList.website}</p>
            <h5 className="font-weight-bold">Phone</h5>
            <p className="font-detail">{props.dataList.phone}</p>
          </div>
        </div>
      </div>
    )
  } else {
    return (<div>

    </div>)
  }
}
export default InformationTab
