import React, { useState } from "react";
import "./App.css";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ReportScreen from "./screens/ReportScreen";

const Layout = () => (
  <div className="page">
    <div className="wrap">
      <Outlet />
    </div>
    <Navbar />
  </div>
);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // 로그인 상태 확인
  // useEffect(() => {
  //   const token = document.cookie.split(';').find(cookie => cookie.trim().startsWith('JSESSIONID='));
  //   if (token) {
  //     setIsLoggedIn(true);
  //     navigate("/");
  //   } else {
  //     setIsLoggedIn(false);
  //     navigate("/login");
  //   }
  // }, [navigate]);

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<h2>메인</h2>} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/report" element={<ReportScreen />} />
        </Route>
        {/* <Route path="/login" element={<LoginScreen />} /> */}
      </Routes>
    </>
  );
}

export default App;
