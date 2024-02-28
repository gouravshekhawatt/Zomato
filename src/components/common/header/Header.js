import React from 'react'
import './header.css'
const header = () => {
  return (

    <div className="headerr-section">
      <div className='max-width headerr'>
        <img
          className='headerr-logo'
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="zomato-logo"
        />

        <div className="headerr-right">
          <div className="headerr-location-search-container">
            <div className="location-wrapper">
              <div className="location-icon-name ">
                <i className="fi fi-sr-marker absolute-center location-icon"></i>
                <div className='Delhi'>Delhi</div>
              </div>
              <i className="fi fi-sr-caret-down absolute-center"></i>
            </div>
            <div className="location-search-separator"></div>
            <div className="headerr-searchBar">
              <i className="fi fi-rs-search absolute-center search-icon "></i>
              <input
                className='search-input'
                placeholder='Search for restaurant, cuisine or a dish'
              />
            </div>
          </div>
          <div className="profile-wrapper">
            <img
              src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
              alt="profile"
              className='headerr-profile-image'
            />
            <span className='headerr-username'>User</span>
            <i className="fi fi-sr-angle-small-down absolute-center profile-options-icon"></i>
          </div>
        </div>
      </div>

      {/* headerr for mobile screens */}
      <div className="headerr-mobile-section">
        <div className="headerr-mobile ">
          <div className="logo-profile-wrapper">
            <div className="logo">
              <img className='headerr-mobile-logo' src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="zomato-logo" />
            </div>
            <div className="profile-mobile-wrapper">
              <img
                src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
                alt="profile"
                className='headerr-profile-image headerr-mobile-profile-image'
              />
            </div>
          </div>
          <div className="headerr-location-search-container headerr-mobile-location-search-container">
            <div className="location-icon-name mobile-location-icon-name">
              <i className="fi fi-sr-marker absolute-center location-icon"></i>
              <div>Delhi</div>
            </div>
            <div className="headerr-mobile-searchBar">
              <i className="fi fi-rs-search absolute-center search-icon mobile-search-icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default header