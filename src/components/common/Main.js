import logo from "./logo.svg";
import "../../css/main.css";
import { useState } from "react";

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
            {/* <div class="YeongcheonImgPart">
              <img
                src="../images/Yeongcheon/Yeongcheon3.jpg"
                alt="Yeongcheon_img01"
              />
              <img
                src="/images/Yeongcheon/Yeongcheon4.jpg"
                alt="Yeongcheon_img02"
              />
            </div> */}
            <div className="YeongcheonShortcut">
              <span className="YeonchoenSlogan">행복한 도시, 푸른 영천</span>
              <br />
              <button className="YeonchoenPageBtn">
                <a href="https://www.yc.go.kr/">영천시 바로가기</a>
              </button>
            </div>
            {/* <div class="YeongcheonImgPart">
              <img
                src="./images/Yeongcheon/Yeongcheon5.JPG"
                alt="Yeongcheon_img03"
              />
              <img
                src="./images/Yeongcheon/Yeongcheon12.jpg"
                alt="Yeongcheon_img04"
              />
            </div> */}
          </div>
        </div>{" "}
        {/* 체험 미리보기 이미지 */}
        <div className="Yeongcheon_ins">
          <div className="inner">
            <div className="pglist">
              <div className="button-container">
                <img
                  src="./images/pin.png"
                  className="button button1"
                  onclick="showDetails('Button 1')"
                  alt="button"
                ></img>
                <img
                  src="./images/pin.png"
                  className="button button2"
                  onclick="showDetails('Button 2')"
                  alt="button"
                ></img>
                <img
                  src="./images/pin.png"
                  className="button button3"
                  onclick="showDetails('Button 3')"
                  alt="button"
                ></img>
                <img
                  src="./images/pin.png"
                  className="button button4"
                  onclick="showDetails('Button 4')"
                  alt="button"
                ></img>
                <img
                  src="./images/pin.png"
                  className="button button5"
                  onclick="showDetails('Button 5')"
                  alt="button"
                ></img>
                <img
                  src="./images/pin.png"
                  className="button button6"
                  onclick="showDetails('Button 6')"
                  alt="button"
                ></img>
                <img
                  src="./images/pin.png"
                  className="button button7"
                  onclick="showDetails('Button 7')"
                  alt="button"
                ></img>
              </div>

              <div id="myModal" class="modal">
                <div className="modal-content">
                  <span className="close">&times;</span>
                  <p id="detailText">Some text in the Modal..</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

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

function Footer() {
  return (
    <footer>
      <div className="inner">
        <div className="ft-logo">
          <a href="https://www.yc.go.kr/">
            <img src="./images/Yeongcheon_logo.png" alt="Yeongcheon_logo" />
          </a>
          <p className="copyright">ⓒ 2023 Team. All Rights Reserved.</p>
        </div>
        <div className="team-int">
          {/*제작 팀원 */}
          <div className="member">
            <p>원도연 dyw7179@gmail.com</p>
            <p>양은지 yeeeee0417@gmail.com</p>
            <p>김재연 getsoss@gmail.com</p>
            <p>이서현 uimi3606@gmail.com</p>
          </div>
        </div>
        <div className="sns">
          {/*영천시 sns */}
          <a href="https://www.instagram.com/yeongcheonsi/">
            <img src="./images/footer/insta.png" alt="" />
          </a>
          <a href="https://www.youtube.com/@YeongCheonSi">
            <img src="./images/footer/youtube.png" alt="" />
          </a>
          <a href="https://www.facebook.com/ycstar01000">
            <img src="./images/footer/facebook.png" alt="" />
          </a>
          <a href="https://blog.naver.com/yeongcheonsi">
            <img src="./images/footer/blog.png" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Main;
