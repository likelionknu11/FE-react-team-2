import React from "react";
import { Link } from "react-router-dom";
import "../../css/main.css";

function Header() {
  return (
    <div className="categories">
      <div className="inner">
        <ul>
          <Link to="/pr-list">
            <li>영천시 소개</li>
          </Link>
          <Link to="/some-path">
            <li>프로그램 소개</li>
          </Link>
          <Link to="/booking">
            <li>체험 예약</li>
          </Link>
          <Link to="/another-path">
            <li>게시판</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
