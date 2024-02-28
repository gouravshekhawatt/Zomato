import React from 'react'


import  "./Homepage.css";

import { Link} from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <header className="header">
    
        <div className="headerContent">
          <h1 className="lg-heading text-light">There is no sincerer love than the love of food.</h1>
          <p className="p text-light"> </p>
          <a href="#idq" className="button">Explore Restaurants</a>
        </div>
      </header>

      <section className="cont2" id="idq">
      <Link to="/dining-out" className="card">
        <div className="bg"><h1>Dining Out!</h1></div>
        <div className="blob"></div>
      </Link>

      <Link to="/delivery" className="card">
        <div className="bg"><h1>Delivery!</h1></div>
        <div className="blob"></div>
      </Link>

      <Link to="/night-life" className="card">
        <div className="bg"><h1>Night Life!</h1></div>
        <div className="blob"></div>
      </Link>
    </section>
    </div>
  );


}

export default HomePage