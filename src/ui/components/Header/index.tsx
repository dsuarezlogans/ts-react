import * as React from 'react';
import { NavLink } from "react-router-dom";
// import NotificationsDropdown from "../NotificationsDropdown";
// import UserProfileDropdown from "../UserProfileDropdown";

import './styles.scss';

const links = [
  {
    title: "Dashboard",
    path: "/"
  },
  {
    title: "Schedule",
    path: "/schedule"
  },
  {
    title: "People",
    path: "/people"
  },
  {
    title: "Projects",
    path: "/projects"
  },
  {
    title: "Clients",
    path: "/clients"
  },
  {
    title: "Reports",
    path: "/reports"
  }
];

class Header extends React.Component {
  render() {
    return (
      <div className="nav-bar-container">
        <div className="nav-bar-wrapper">
          <nav className="nav-bar">
            <div>
              <div className="nav-bar-tabs">
                {links.map((link, key) => {
                  return (
                    <div key={key}>
                      <NavLink
                        exact
                        to={link.path}
                        activeClassName="line-tab-selected"
                      >
                        {link.title}
                      </NavLink>
                    </div>
                  );
                })}
              </div>
              <div className="nav-bar-user">
                <div className="nav-bar-user-label">
                  <a href="#">Eliecer Uribe</a>
                </div>
                <div className="nav-bar-user-notifications">
                  {/*<NotificationsDropdown />*/}
                </div>
                <div className="nav-bar-user-avatar">
                  {/*<UserProfileDropdown />*/}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;