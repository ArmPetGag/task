import { useState } from 'react'
import "./SideBar.scss"

const SideBar = () => {
  const [isExpended, setIsExpended] = useState(false);
  const menuItems = [
    {
      text: "Search",
      icon: "icons/1.png",
    },
    {
      text: "Home",
      icon: "icons/2.png",
    },
    {
      text: "TV Shows",
      icon: "icons/3.png",
    },
    {
      text: "Movies",
      icon: "icons/4.png",
    },
    {
      text: "Genres",
      icon: "icons/5.png",
    },
    {
      text: "Watch Later",
      icon: "icons/6.png",
    },
  ]
  return (
    <div className={isExpended ? 'side-nav-container' : 'side-nav-container side-nav-container-NX '}>
      <div className="nav-upper">
        <div className="nav-heading">

          {isExpended && (<div className="nav-brand">
            <img src="" alt="" />
            <h2>Task Armen</h2>
          </div>)}

          <button className={isExpended ? 'hamburger hamburger-in' : 'hamburger hamburger-out'}
            onClick={() => setIsExpended(!isExpended)}
          >

            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="nav-menu" onClick={() => setIsExpended(!isExpended)}>
          {
            menuItems.map(({ text, icon }) => (
              <a href="#" className={isExpended ? "menu-item" : "menu-item menu-item-NX"}>
                <img src={icon} alt=""  />
                {isExpended && <p>{text}</p>}
                {!isExpended && <div className="tooltip">{text}</div>}
              </a>)
            )
          }
        </div>
      </div>
      <div className="nav-footer">
        {isExpended && <div className="nav-details">
          <div className="nav-footer-info">
            <p className='little'>LANGUAGE</p>
            <p className='little'>GET HELP</p>
            <p className='little'>EXIT</p>
          </div>
        </div>}
      </div>

    </div>
  )
}

export default SideBar