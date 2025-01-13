import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const LightPage = () => {
  const [title] = useState("ペンダントライトの分析と新たなデザイン提案");
  const [summary] = useState("Clam Glow");
  const [period] = useState("2024年5月 - 2024年7月");
  const [teamSize] = useState("1人");
  const [tools] = useState(
    "Adobe Illustrator・Fusion360・HTMl/CSS・数量化理論第Ⅲ類・クラスター分析"
  );
  const [boldDescription] = useState(
    "光が直接当たらない、落ち着いた雰囲気のペンダントライト"
  );
  const [detailedDescription] = useState(
    "このペンダントライトは、数量化理論第Ⅲ類、クラスター分析などの多変量解析手法を用いて、既存製品のプロダクトマップを作成し、コンセプトを設定しました。デザイン案のスケッチ・3Dモデリングを行い、作成したリビングチェアをPRするWebサイトを作成しました。"
  );
  const [skills] = useState("デザイン力・企画力・分析力");
  const [media] = useState([
    "/light/light1.png",
    "/light/light2.PNG",
    "/light/light3.PNG",
    "/light/light4.PNG",
    "/light/light5.PNG",
  ]);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleNext = () => {
    setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % media.length);
  };

  const handlePrev = () => {
    setCurrentMediaIndex(
      (prevIndex) => (prevIndex - 1 + media.length) % media.length
    );
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    const boxWidth = carousel
      .querySelector(".box")
      .getBoundingClientRect().width;
    carousel.style.transform = `translateX(${
      -1 * boxWidth * currentMediaIndex
    }px)`;
  }, [currentMediaIndex]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans">
      <header
        className="py-2 sm:py-4 lg:py-8 px-4 sm:px-8 lg:px-8 text-white relative border-b-0"
        style={{ paddingTop: "2vw", paddingBottom: "2vw" }}
      >
        <div className="absolute top-4 left-4 sm:left-8 lg:left-16">
          <Link to="/" className="text-main hover:text-main-50 duration-300">
            <i className="bi bi-house-door-fill text-3xl"></i>
          </Link>
        </div>
        <div className="text-center mt-2">
          <p className="text-lg mt-2 text-main">{title}</p>
          <h1 className="text-4xl font-bold text-main mt-2 mb-4">{summary}</h1>
          <div className="carousel-container relative w-4/5 mx-auto overflow-hidden">
            <div
              className="carousel flex transition-transform duration-300"
              ref={carouselRef}
            >
              {media.map((src, index) => (
                <div
                  key={index}
                  className="box min-w-full h-full flex justify-center items-center"
                >
                  <img
                    src={src}
                    alt={`Light ${index + 1}`}
                    className={`${
                      src.includes("light1.png") ? "w-1/3" : "w-2/3"
                    } h-1/2 object-contain`}
                  />
                </div>
              ))}
            </div>
            <button
              id="lt"
              className="absolute top-1/2 left-6 sm:left-24 transform -translate-y-1/2 bg-black bg-opacity-80 text-white text-2xl rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-opacity-50"
              onClick={handlePrev}
            >
              &lt;
            </button>
            <button
              id="gt"
              className="absolute top-1/2 right-6 sm:right-24 transform -translate-y-1/2 bg-black bg-opacity-80 text-white text-2xl rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-opacity-50"
              onClick={handleNext}
            >
              &gt;
            </button>
          </div>
        </div>
      </header>
      <div className="container mx-auto mt-2 sm:mt-4 p-4 sm:p-8">
        <div className="mt-4">
          <h2 className="text-2xl font-bold text-main px-4 sm:px-8 md:px-16 lg:px-32 xl:px-72">
            製作期間
          </h2>
          <p className="text-lg mt-2 text-gray-700 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-72">
            {period}
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-main px-4 sm:px-8 md:px-16 lg:px-32 xl:px-72">
            製作人数
          </h2>
          <p className="text-lg mt-2 text-gray-700 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-72">
            {teamSize}
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-main px-4 sm:px-8 md:px-16 lg:px-32 xl:px-72">
            使用ツール
          </h2>
          <p className="text-lg mt-2 text-gray-700 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-72">
            {tools}
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-main px-4 sm:px-8 md:px-16 lg:px-32 xl:px-72">
            作品概要
          </h2>
          <p className="text-lg font-bold mt-2 text-gray-700 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-72">
            {boldDescription}
          </p>
          <p className="text-lg mt-2 text-gray-700 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-72">
            {detailedDescription}
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-main px-4 sm:px-8 md:px-16 lg:px-32 xl:px-72">
            得たスキル
          </h2>
          <p className="text-lg mt-2 text-gray-700 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-72">
            {skills}
          </p>
        </div>
        <div className="text-center mt-10">
          <a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="top-link text-main"
          >
            Topへ
          </a>
        </div>
      </div>
    </div>
  );
};

export default LightPage;
