import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();

  const allowedPaths = ["/", "/page1", "/page2", "/page3", "/page4"];

  // 현재 경로가 allowedPaths에 포함되지 않으면 null 반환
  if (!allowedPaths.includes(location.pathname)) {
    return null;
  }

  return (
    <div className="nav_bar">
      <div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          테
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/page1"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          스
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/page2"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          트
        </NavLink>
      </div>
    </div>
  );
}
