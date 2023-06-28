import React from "react";
import "../../css/main.css";

function Header() {
  return (
    <div className="categories">
      <div className="inner">
        <ul>
          <a href="./programlist.html">
            <li>영천시 소개</li>
          </a>
          <a href="">
            <li>프로그램 소개</li>
          </a>
          <a href="./index2.html">
            <li>체험 예약</li>
          </a>
          <a href="">
            <li>게시판</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Header;
