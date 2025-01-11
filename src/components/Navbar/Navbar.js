import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const allowedPaths = ["/", "/report", "/login", "/profile"];

  // 현재 경로가 allowedPaths에 포함되지 않으면 null 반환
  if (!allowedPaths.includes(location.pathname)) {
    return null;
  }

  const handleNavigation = (path) => {
    // 현재 경로와 이동하려는 경로가 같으면 무시
    if (location.pathname === path) return;
    navigate(path, { replace: true });
  };

  return (
    <nav className="nav_bar">
      <div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          onClick={(e) => {
            e.preventDefault();
            handleNavigation("/");
          }}
        >
          테
        </NavLink>
      </div>

      <div>
        {/* 로그인 네비게이션 추가 */}
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          onClick={(e) => {
            e.preventDefault();
            handleNavigation("/login");
          }}
        >
          로그인
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          onClick={(e) => {
            e.preventDefault();
            handleNavigation("/profile");
          }}
        >
          프로필필
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/report"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          onClick={(e) => {
            e.preventDefault();
            handleNavigation("/report");
          }}
        >
          경험치 현황
        </NavLink>
      </div>
    </nav>
  );
}
