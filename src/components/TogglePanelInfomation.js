import React, { useEffect, useState } from 'react'

const TogglePanelInfomation = (props) => {
  // dataList,
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
    var menuUpdate = menuToggle;
    menuUpdate.map((arr, index) => {
      if (index === swipeToMenu) {
        menuUpdate[index].status = 1;
      } else {
        menuUpdate[index].status = 0;
      }
    });
    console.log(menuUpdate);
    setMenuToggle(menuUpdate);
  }

  return (
    <ul className="nav nav-tabs">
      {menuToggle.map((menu, index) => (
        <li key={index} className="nav-item">
          <i className={menu.status ? 'nav-link active' : 'nav-link'} onClick={() => onPanelSwipe(index)}>{menu.name}</i>
        </li>
      ))}
    </ul>
  )
}

export default TogglePanelInfomation
