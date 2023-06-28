import React from "react";
import "../../css/main.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function Header() {
  return (
    <BrowserRouter>
      <div className="categories">
        <div className="inner">
          <ul>
            <Link to="">
              <li>영천시 소개</li>
            </Link>
            <Link to="">
              <li>프로그램 소개</li>
            </Link>
            <Link to="/booking">
              <li>체험 예약</li>
            </Link>
            <Link to="">
              <li>게시판</li>
            </Link>
          </ul>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Header;
