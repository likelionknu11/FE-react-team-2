import React from "react";

const Page2 = () => {
  return (
    <div>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="" />
          <meta
            name="author"
            content="Mark Otto, Jacob Thornton, and Bootstrap contributors"
          />
          <meta name="generator" content="Hugo 0.84.0" />
          <title>Page2</title>

          <link
            rel="canonical"
            href="https://getbootstrap.com/docs/5.0/examples/carousel/"
          />

          <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet" />

          <link href="carousel.css" rel="stylesheet" />
        </head>
        <body>
          <header>
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">
                  아이콘 넣을 곳
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarCollapse"
                  aria-controls="navbarCollapse"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                  <ul class="navbar-nav me-auto mb-2 mb-md-0">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">
                        가입하기
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        로그인
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link disabled"
                        href="#"
                        tabindex="-1"
                        aria-disabled="true"
                      >
                        사이트맵
                      </a>
                    </li>
                  </ul>
                  <form class="d-flex">
                    <input
                      class="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button class="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </nav>
          </header>

          <main>
            <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#myCarousel"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#myCarousel"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#myCarousel"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <svg
                    class="bd-placeholder-img"
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <rect width="100%" height="100%" fill="#777" />
                  </svg>

                  <div class="container">
                    <div class="carousel-caption text-start">
                      <h1>첫 번째 이미지입니다.</h1>
                      <p>이미지 소개를 적으면 될 듯</p>
                      <p>
                        <a class="btn btn-lg btn-primary" href="#">
                          다른 곳으로 이동할 버튼
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <svg
                    class="bd-placeholder-img"
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <rect width="100%" height="100%" fill="#777" />
                  </svg>

                  <div class="container">
                    <div class="carousel-caption">
                      <h1>두 번째 이미지입니다.</h1>
                      <p>두 번째 이미지 소개 적으면 될 듯</p>
                      <p>
                        <a class="btn btn-lg btn-primary" href="#">
                          다른 곳으로 이동할 버튼
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <svg
                    class="bd-placeholder-img"
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <rect width="100%" height="100%" fill="#777" />
                  </svg>

                  <div class="container">
                    <div class="carousel-caption text-end">
                      <h1>세 번째 이미지입니다.</h1>
                      <p>이미지 소개 적으면 될 것 같아요</p>
                      <p>
                        <a class="btn btn-lg btn-primary" href="#">
                          다른 곳으로 이동할 버튼
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>

            <div class="container marketing">
              <div class="row"></div>
              <div class="row featurette">
                <div class="col-md-7 order-md-2">
                  <h2 class="featurette-heading">
                    소개
                    <span class="text-muted"></span>
                  </h2>
                  <p class="lead">
                    강원 홍천군 홍천읍 양지말 마을에 들어서면 양념과 고기가 섞여
                    타는 맛있는 냄새가 이 일대를 가득 메운다. 20개 업소가 밀집한
                    화로구이 골목은 설악산 가는 길목에 있는 데다 양념 맛이
                    독특해 전국적으로 명성이 자자하다. 주말과 휴일이면 가게마다
                    문전성시를 이루고 한 해 외지 관광객이 100만 명에 달한다고
                    하니 웬만한 관광명소 부럽지 않다. 골목의 화로구이는 고추장,
                    된장, 벌꿀 등 특제 양념으로 버무린 돼지고기를 참나무 숯을
                    넣은 옛날 무쇠 화로에 구워 특유의 잡내도 나지 않는다.
                    가게마다 저마다의 비법으로 화로구이의 풍미를 더하는데
                    홍천더덕과 함께 곁들이면 일품이다. 주변에 대명 스키장, 홍천
                    온천, 홍천강 유원지, 팔봉산 등이 있어 연계 관광 코스로 좋다.
                  </p>
                </div>
                <div class="col-md-5 order-md-1">
                  <svg
                    class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
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
              <hr class="featurette-divider" />
            </div>

            <footer class="footerContainer">
              <p>푸터 정보가 들어갈 곳 &middot;</p>
            </footer>
          </main>

          <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
        </body>
      </html>
    </div>
  );
};

export default Page2;
