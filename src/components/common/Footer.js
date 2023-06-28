import React from "react";
import "../../css/main.css";

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

export default Footer;
