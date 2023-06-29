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
            {/* <img
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
            /> */}
            {/* <img //포도나무
              className="localProduct14"
              src="images/Yeongcheonins/localProduct14.png"
              alt="localProduct14"
            />
            <img //사과나무
              className="localProduct15"
              src="images/Yeongcheonins/localProduct15.png"
              alt="localProduct15"
            />
            <img //농장
              className="background03"
              src="images/Yeongcheonins/background03.png"
              alt="background03"
            />
            <img //텃밭
              className="background04"
              src="images/Yeongcheonins/background04.png"
              alt="background04"
            /> */}

            <div className="grapes">
              <img //포도
                className="grapes1"
                src="images/Yeongcheonins/localProduct05.png"
                alt="localProduct05"
              />
              <img //포도
                className="grapes2"
                src="images/Yeongcheonins/localProduct08.png"
                alt="localProduct08"
              />
              <img //와인
                className="grapes3"
                src="images/Yeongcheonins/localProduct16.png"
                alt="localProduct16"
              />
            </div>

            <div className="apple">
              <img //사과
                className="apple1"
                src="images/Yeongcheonins/localProduct10.png"
                alt="localProduct10"
              />
              <img //사과
                className="apple2"
                src="images/Yeongcheonins/localProduct11.png"
                alt="localProduct11"
              />
              <img //사과
                className="apple3"
                src="images/Yeongcheonins/localProduct12.png"
                alt="localProduct12"
              />
              <img //사과
                className="apple4"
                src="images/Yeongcheonins/localProduct17.png"
                alt="localProduct17"
              />
            </div>

            <div className="horse">
              <img //승마
                className="horse1"
                src="images/Yeongcheonins/localProduct02.png"
                alt="localProduct02"
              />
              <img //승마
                className="horse2"
                src="images/Yeongcheonins/localProduct03.png"
                alt="localProduct03"
              />
            </div>

            <div className="medicine">
              <img //힌약
                className="medicine1"
                src="images/Yeongcheonins/localProduct19.png"
                alt="localProduct19"
              />
              <img //힌약
                className="medicine2"
                src="images/Yeongcheonins/localProduct20.png"
                alt="localProduct20"
              />
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Main;
