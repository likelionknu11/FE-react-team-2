import React from "react";
// import "../../css/PrList.css";
import ExperienceItem from "./ExperienceItem";

function PrList() {
  const experiences = [
    {
      imageUrl: "images/포도 고화질.webp",
      title: "포도농장 클래스",
      price: "20,000원",
      alt: "Experience 1",
    },
    {
      imageUrl: "images/영천와인.jpg",
      title: "와인 클래스",
      price: "35,000원",
      alt: "Experience 2",
    },
    {
      imageUrl: "images/한방체험.jpg",
      title: "한약 클래스",
      price: "30,000원",
      alt: "Experience 3",
    },
    {
      imageUrl: "images/영천 천문대.jpg",
      title: "영천 별자리 탐방",
      price: "30,000원",
      alt: "Experience 4",
    },
    {
      imageUrl: "images/영천승마.jpg",
      title: "승마 체험",
      price: "50,000원",
      alt: "Experience 5",
    },
    {
      imageUrl: "images/샤인머스켓.jpg",
      title: "샤인 머스캣 클래스",
      price: "32,000원",
      alt: "Experience 6",
    },
    {
      imageUrl: "images/텃밭체험.jpg",
      title: "텃밭체험",
      price: "23,000원",
      alt: "Experience 7",
    },
    {
      imageUrl: "images/사과잼.jpg",
      title: "사과잼 클래스",
      price: "15,000원",
      alt: "Experience 8",
    },
    {
      imageUrl: "images/사과.jpg",
      title: "사과농장",
      price: "25,000원",
      alt: "Experience 9",
    },
  ];

  return (
    <div className="inner">
      <div className="experience-list">
        {experiences.map((experience, index) => (
          <ExperienceItem
            key={index}
            imageUrl={experience.imageUrl}
            title={experience.title}
            price={experience.price}
            alt={experience.alt}
          />
        ))}
      </div>
    </div>
  );
}

export default PrList;
