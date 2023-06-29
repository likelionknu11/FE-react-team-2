import React from "react";
import Figure from "react-bootstrap/Figure";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../css/DetailPage.css';

export const DetailPage = () => {
  return (
    <div className="detail-page">
      <Figure>
        <div className="program">
          <div className="program-img">
            <Figure.Image
              width={200}
              height={300}
              alt="300x400"
              src="./포도 고화질.webp"
            />
          </div>
          <div className="program-info">
            <div className="program-title">
              <h2>포도농장 클래스</h2>
            </div>
            <div className="program-sub">
              프로그램명: 포도농장 클래스 <br />
              기간: 상시 <br />
              체험비: 25,000 <br />
              최소인원: 2 <br />
            </div>
            <div className="program-caption">
              <Figure.Caption>
                포도의 고장 영천에서 내가 딴 포도로 나만의 와인을 만드는 소중한
                추억! <br />
                와이너리 체험과 영천의 아름다운 명소를 둘러보는
                와인투어프로그램에 참여하세요.
              </Figure.Caption>
            </div>
          </div>
        </div>
      </Figure>
    </div>
  );
};
