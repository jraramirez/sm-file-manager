import React from 'react';

import imgStaff from '../../../assets/images/paris.jpg';

import classes from './SidebarRight.module.css';

import { Link } from 'react-router-dom';

const sidebarRight = (props) => (
  <div className={classes.SidebarRight}>
    <div className={classes.SidebarContent}>
      <div className={classes.ImportantCom}>
        <div className={classes.Header}>
          <h4>Important communication</h4>
        </div>

        <div className={classes.ImpBody}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <Link to="/">Read more</Link> </p>
        </div>
      </div>

      <div className={classes.OurComp}>
        <h3>Our companies</h3>
        <ul>
          <li><Link to="/">Zaluvida</Link></li>
          <li><Link to="/">Mootral</Link></li>
          <li><Link to="/">InQpharm</Link></li>
          <li><Link to="/">Neem Biotech</Link></li>
        </ul>
      </div>

      <div className={classes.OurVission}>
        <h3>Our vision</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip  ex ea commodo consequat. <Link to="/">Read more</Link></p>
      </div>

      <div className={classes.OurStaff}>
        <h3>Our staff</h3>
        <div className={classes.StaffImg}>
          <Link to="/"><img src={imgStaff} alt="Staff" /></Link>
          <Link to="/"><img src={imgStaff} alt="Staff" /></Link>
          <Link to="/"><img src={imgStaff} alt="Staff" /></Link>
          <Link to="/"><img src={imgStaff} alt="Staff" /></Link>
          <Link to="/"><img src={imgStaff} alt="Staff" /></Link>
          <Link to="/"><img src={imgStaff} alt="Staff" /></Link>
          <Link to="/"><img src={imgStaff} alt="Staff" /></Link>
          <Link to="/"><img src={imgStaff} alt="Staff" /></Link>
          <Link to="/"><img src={imgStaff} alt="Staff" /></Link>
          <Link to="/"><img src={imgStaff} alt="Staff" /></Link>
          <Link to="/"><img src={imgStaff} alt="Staff" /></Link>
          <Link to="/"><img src={imgStaff} alt="Staff" /></Link>
          <Link to="/"><img src={imgStaff} alt="Staff" /></Link>
          <Link to="/"><img src={imgStaff} alt="Staff" /></Link>
          <Link to="/"><img src={imgStaff} alt="Staff" /></Link>
          <Link to="/"><img src={imgStaff} alt="Staff" /></Link>
          <Link to="/"><img src={imgStaff} alt="Staff" /></Link>
          <Link to="/"><img src={imgStaff} alt="Staff" /></Link>
        </div>
      </div>

      <div className={classes.Employees}>
        <img src={imgStaff} alt="Staff" />
        <img src={imgStaff} alt="Staff" />
        <img src={imgStaff} alt="Staff" />
        <span className={classes.EmpCount}>+84</span>
        <button className={classes.BtnGreen}>More employees</button>
      </div>
    </div>
  </div>
);

export default sidebarRight;
