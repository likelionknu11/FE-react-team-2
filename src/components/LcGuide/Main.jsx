import React from "react";

function Page2() {
  return (
    <div>
      <main>
        <div className="container marketing">
          <div className="row"></div>
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">
                소개
                <span className="text-muted"></span>
              </h2>
              <p className="lead">
                강원 홍천군 홍천읍 양지말 마을에 들어서면 양념과 고기가 섞여
                타는 맛있는 냄새가 이 일대를 가득 메운다. 20개 업소가 밀집한
                화로구이 골목은 설악산 가는 길목에 있는 데다 양념 맛이 독특해
                전국적으로 명성이 자자하다. 주말과 휴일이면 가게마다 문전성시를
                이루고 한 해 외지 관광객이 100만 명에 달한다고 하니 웬만한
                관광명소 부럽지 않다. 골목의 화로구이는 고추장, 된장, 벌꿀 등
                특제 양념으로 버무린 돼지고기를 참나무 숯을 넣은 옛날 무쇠
                화로에 구워 특유의 잡내도 나지 않는다. 가게마다 저마다의
                비법으로 화로구이의 풍미를 더하는데 홍천더덕과 함께 곁들이면
                일품이다. 주변에 대명 스키장, 홍천 온천, 홍천강 유원지, 팔봉산
                등이 있어 연계 관광 코스로 좋다.
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width="500"
                height="500"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#eee" />
                <text x="50%" y="50%" fill="#aaa" dy=".3em">
                  이미지1
                </text>
              </svg>
            </div>
          </div>
          <hr className="featurette-divider" />
        </div>

        <footer className="footerContainer">
          <p>푸터 정보가 들어갈 곳 &middot;</p>
        </footer>
      </main>
    </div>
  );
}

export default Page2;
