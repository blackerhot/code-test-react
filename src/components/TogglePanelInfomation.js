import React, { useEffect, useState } from 'react'
import TabMenu from './TabMenu'
import InformationTab from './InformationTab'
import ReviewTabs from './ReviewTabs'
const TogglePanelInfomation = (props) => {
  // ,
  const [menuToggle, setMenuToggle] = useState([
    {
      name: "Information",
      status: 1
    },
    {
      name: "Reviews",
      status: 0
    }]
  );

  useEffect(() => {

  }, []);

  const onPanelSwipe = (swipeToMenu) => {
    var menuUpdate = [...menuToggle];
    menuUpdate.map((arr, index) => {
      if (index === swipeToMenu) {
        menuUpdate[index].status = 1;
      } else {
        menuUpdate[index].status = 0;
      }
    });
    setMenuToggle(menuUpdate);
  }

  return (
    <div>
      <TabMenu menuToggle={menuToggle} onPanelSwipe={onPanelSwipe} />
      <InformationTab menuToggle={menuToggle} dataList={props.dataList} />
      <ReviewTabs menuToggle={menuToggle} dataList={props.dataList} />
    </div>
  )
}

export default TogglePanelInfomation
