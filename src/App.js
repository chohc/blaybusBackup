import React from "react";
import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Layout = () => (
  <div className="page">
    <div className="wrap">
      <Outlet />
    </div>
    <Navbar />
  </div>
);

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<h2>메인</h2>} />
          <Route path="/page1" element={<h2>페이지1</h2>} />
          <Route path="/page2" element={<h2>페이지2</h2>} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Route>
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </>
  );
}

export default App;
