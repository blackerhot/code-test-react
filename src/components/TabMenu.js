import React, { useEffect, useState } from 'react'

const TabMenu = (props) => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setMenu(props.menuToggle)
  }, []);

  return (
    <div>
      <ul className="nav nav-tabs">
        {menu.map((menu, index) => (
          <li key={index} className="nav-item">
            <i className={menu.status === 1 ? 'nav-link active' : 'nav-link'} onClick={() => props.onPanelSwipe(index)}>{menu.name}</i>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default React.memo(TabMenu)
