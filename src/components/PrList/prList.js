import React from 'react';
import Navigation from '../common/Navigation';
import '../../css/PrList.css';

function MainPage() {
  return (
    <div className="inner">
    <Navigation title="프로그램 목록" />

      <div className="experience-list">
        <div className="experience-item">
          <a href="./booking.html">
            <div className="experience-image">
              <img src="images/포도 고화질.webp" alt="Experience 1" />
            </div>
            <div className="experience-description">
              <h2>포도농장 클래스</h2>
              <p>20,000원</p>
            </div>
          </a>
        </div>

        <div className="experience-item">
          <a href="./booking.html">
            <div className="experience-image">
              <img src="images/영천와인.jpg" alt="Experience 2" />
            </div>
            <div className="experience-description">
              <h2>와인 클래스</h2>
              <p>35,000원</p>
            </div>
          </a>
        </div>

        <div className="experience-item">
          <a href="./booking.html">
            <div className="experience-image">
              <img src="images/한방체험.jpg" alt="Experience 3" />
            </div>
            <div className="experience-description">
              <h2>한약 클래스</h2>
              <p>30,000원</p>
            </div>
          </a>
        </div>

        <div className="experience-item">
          <a href="./booking.html">
            <div className="experience-image">
              <img src="images/영천 천문대.jpg" alt="Experience 4" />
            </div>
            <div className="experience-description">
              <h2>영천 별자리 탐방</h2>

              <p>30,000원</p>
            </div>
          </a>
        </div>

        <div className="experience-item">
          <a href="./booking.html">
            <div className="experience-image">
              <img src="images/영천승마.jpg" alt="Experience 5" />
            </div>
            <div className="experience-description">
              <h2>승마 체험</h2>
              <p>50,000원</p>
            </div>
          </a>
        </div>

        <div className="experience-item">
          <a href="./booking.html">
            <div className="experience-image">
              <img src="images/샤인머스켓.jpg" alt="Experience 6" />
            </div>
            <div className="experience-description">
              <h2>샤인 머스캣 클래스</h2>
              <p>32,000원</p>
            </div>
          </a>
        </div>

        <div className="experience-item">
          <a href="./booking.html">
            <div className="experience-image">
              <img src="images/텃밭체험.jpg" alt="Experience 7" />
            </div>
            <div className="experience-description">
              <h2>텃밭체험</h2>
              <p>23,000원</p>
            </div>
          </a>
        </div>

        <div className="experience-item">
          <a href="./booking.html">
            <div className="experience-image">
              <img src="images/사과잼.jpg" alt="Experience 8" />
            </div>
            <div className="experience-description">
              <h2>사과잼 클래스</h2>
              <p>15,000원</p>
            </div>
          </a>
        </div>

        <div className="experience-item">
          <a href="./booking.html">
            <div className="experience-image">
              <img src="images/사과.jpg" alt="Experience 9" />
            </div>
            <div className="experience-description">
              <h2>사과농장</h2>
              <p>25,000원</p>
            </div>
          </a>
        </div>
      </div>

      <footer>
        <p>&copy; 2023 Your Site Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default MainPage;
