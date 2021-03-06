import React from 'react';

import profileImage from '../../../assets/images/paris.jpg';
import bellIcon from '../../../assets/images/icons/bell.png';
import msgIcon from '../../../assets/images/icons/msg.png';
import avatarIcon from '../../../assets/images/icons/avatar.png';
import settingsIcon from '../../../assets/images/icons/settings.png';

import classes from './SidebarLeft.module.css';

import { Link } from 'react-router-dom';

const profImg = {
  backgroundImage: 'url(' + profileImage + ')'
};

const sidebarLeft = (props) => (
  <div className={classes.SidebarWrapper}>
    <div className={classes.Logo}>
      <h1>The<strong>Matrix</strong></h1>
    </div>

    <div className={classes.ProfileImg}>

      <div className={classes.Prof} style={profImg}>
      <Link to="/profile">
        <div className={classes.ProfLink}></div>
      </Link>
        <div className={classes.Status}></div>
      </div>


      <div className={classes.ProfileDesc}>
        <p>Good morning</p>
        <p>{props.firstName}!</p>
      </div>
    </div>

    <div className={classes.Navigations}>
      <ul className={classes.Activities}>
        <li><Link to="/"><img src={bellIcon} alt="Notifications" />Notifications</Link><span className={classes.NotifCount}>9</span></li>
        <li><Link to="/profile"><img src={avatarIcon} alt="View profile" />View profile</Link></li>
        <li><Link to="/settings"><img src={settingsIcon} alt="Settings" />Settings</Link></li>
      </ul>

      <ul className={classes.Connect}>
        <li><p>QUICK LINKS</p></li>
        <li><Link to="/">Zaluvida</Link></li>
        <li><Link to="/">Mootral</Link></li>
        <li><Link to="/">InQpharm</Link></li>
        <li><Link to="/">Neem Biotech</Link></li>
      </ul>
    </div>
  </div>
);

export default sidebarLeft;
