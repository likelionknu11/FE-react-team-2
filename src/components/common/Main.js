import logo from "./logo.svg";
import "../../css/main.css";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Main() {
  return (
    <div className="App">
      <Header></Header>
      <div className="background">
        <header>
          <div className="inner">
            <img
              src="images/Yeongcheon/Yeongcheon2.jpg"
              alt="main_header_img"
            />
          </div>
        </header>
        <div className="main">
          <div className="inner">
            <div className="YeongcheonShortcut">
              <span className="YeonchoenSlogan">행복한 도시, 푸른 영천</span>
              <br />
              <button className="YeonchoenPageBtn">
                <a href="https://www.yc.go.kr/">영천시 바로가기</a>
              </button>
            </div>
          </div>
        </div>
        {/* 체험 미리보기 이미지 */}
        <div className="Yeongcheon_ins">
          <div className="inner">
            <img
              className="cat01"
              src="images/Yeongcheonins/cat01.png"
              alt="cat01"
            />
            <img
              className="cat02"
              src="images/Yeongcheonins/cat02.png"
              alt="cat02"
            />
            <img
              className="cat03"
              src="images/Yeongcheonins/cat03.png"
              alt="cat03"
            />
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Main;
