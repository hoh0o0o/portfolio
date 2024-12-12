import React, { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("Title");
  const [fixedTitle, setFixedTitle] = useState("Title");
  const [content, setContent] = useState("本文を書く領域です。");
  const [fixedContent, setFixedContent] = useState("本文を書く領域です。");
  const [hoveredPart, setHoveredPart] = useState(null);
  const [clickedPart, setClickedPart] = useState(null);

  const handleMouseEnter = (newTitle, newContent, part) => {
    setTitle(newTitle);
    setContent(newContent);
    setHoveredPart(part);
    setClickedPart(null); // 他のパーツをホバーしたら固定していた色を戻す
  };

  const handleMouseLeave = () => {
    setTitle(fixedTitle);
    setContent(fixedContent);
    setHoveredPart(null);
  };

  const handleClick = (newTitle, newContent, part) => {
    setFixedTitle(newTitle);
    setTitle(newTitle);
    setFixedContent(newContent);
    setContent(newContent);
    setClickedPart(part);
  };

  return (
    <div
      className="bg-white min-h-screen font-sans"
      style={{
        fontFamily: "'Yu Gothic', '游ゴシック', sans-serif",
        fontWeight: "bold",
      }}
    >
      <header>
        <link
          href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <div className="container flex mx-auto p-3 flex-col md:flex-row items-center">
          <a href="#" className="font-normal text-gray-900 mb-4 md:mb-0">
            <span className="text-xl ml-3"></span>
          </a>
          <nav className="md:ml-auto text-xl text-main font-normal">
            <a
              href="#home"
              className="mr-12 hover:text-main-50 duration-300 nav-link"
            >
              Home
            </a>
            <a
              href="#Skills"
              className="mr-12 hover:text-main-50 duration-300 nav-link"
            >
              Skills
            </a>
            <a
              href="#Works"
              className="mr-12 hover:text-main-50 duration-300 nav-link"
            >
              Works
            </a>
            <a
              href="#About"
              className="hover:text-main-50 duration-300 nav-link"
            >
              About
            </a>
          </nav>
        </div>
      </header>
      <div className="bg-main p-32 text-white">
        <div className="flex items-baseline">
          <h1 className="text-4xl font-bold">
            Hi<span className="text-main-50">!</span>
          </h1>
          <h1 className="text-4xl font-bold ml-4">I'm</h1>
        </div>
        <h2 className="text-6xl font-bold">
          Haruho Nishimura<span className="text-main-50">!</span>
        </h2>
        <h2 className="text-xl font-normal mt-10">
          This is the portfolio site, a student living in Wakayama.
        </h2>
      </div>
      <div id="Skills" className="p-12 text-main">
        <div className="text-center mb-2">
          <h2 className="text-3xl font-bold mb-4 inline-block relative">
            Skills
            <span className="block w-8 h-1 bg-main mt-2 mx-auto"></span>
          </h2>
        </div>
        <div className="container flex flex-wrap md:flex-nowrap items-center h-auto">
          <div className="w-full h-full md:w-1/2 p-4 text-center md:text-left">
            <svg
              id="_レイヤー_2"
              data-name="レイヤー_2"
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="200"
              className="mx-auto md:mx-0"
              style={{
                marginLeft: window.innerWidth < 768 ? "auto" : "40%",
                marginRight: "auto",
              }} // 画面幅が小さいときに中央配置、大きいときに適切な位置に配置
            >
              <defs>
                <style>
                  {`
                    .cls-1 {
                      fill: #e6e6e6;
                      transition: fill 0.3s ease;
                    }
                    .hovered, .clicked {
                      fill: #FBBB60;
                    }
                  `}
                </style>
              </defs>
              <g id="_レイヤー_1-2" data-name="レイヤー_1">
                <g>
                  <path
                    className={`cls-1 ${
                      hoveredPart === "part1" || clickedPart === "part1"
                        ? "hovered"
                        : ""
                    }`}
                    d="M46.41,49.3c13.64-14.4,32.94-23.39,54.35-23.39s40.71,8.99,54.35,23.39l22.9-13.22C159.52,14.03,131.77,0,100.75,0S41.99,14.03,23.5,36.08l22.9,13.22Z"
                    onMouseEnter={() =>
                      handleMouseEnter(
                        "Programing",
                        "基本的な情報処理能力",
                        "part1"
                      )
                    }
                    onMouseLeave={handleMouseLeave}
                    onClick={() =>
                      handleClick("Programing", "基本的な情報処理能力", "part1")
                    }
                  />
                  <path
                    className={`cls-1 ${
                      hoveredPart === "part2" || clickedPart === "part2"
                        ? "hovered"
                        : ""
                    }`}
                    d="M82.85,173.43c-32.69-8.02-56.94-37.52-56.94-72.68,0-6.54.84-12.88,2.41-18.92l-23.06-13.31C1.85,78.64,0,89.48,0,100.75c0,49.54,35.75,90.72,82.85,99.17v-26.48Z"
                    onMouseEnter={() =>
                      handleMouseEnter(
                        "Design",
                        "論理的な思考によるデザイン力",
                        "part2"
                      )
                    }
                    onMouseLeave={handleMouseLeave}
                    onClick={() =>
                      handleClick(
                        "Design",
                        "論理的な思考によるデザイン力",
                        "part2"
                      )
                    }
                  />
                  <path
                    className={`cls-1 ${
                      hoveredPart === "part3" || clickedPart === "part3"
                        ? "hovered"
                        : ""
                    }`}
                    d="M173.18,81.83c1.57,6.04,2.41,12.38,2.41,18.92,0,34.65-23.55,63.8-55.52,72.32v26.57c46.4-9.01,81.43-49.86,81.43-98.89,0-11.27-1.85-22.11-5.27-32.23l-23.06,13.31Z"
                    onMouseEnter={() =>
                      handleMouseEnter(
                        "Plannning",
                        "論理的な思考による企画・提案力",
                        "part3"
                      )
                    }
                    onMouseLeave={handleMouseLeave}
                    onClick={() =>
                      handleClick(
                        "Plannning",
                        "論理的な思考による企画・提案力",
                        "part3"
                      )
                    }
                  />
                </g>
              </g>
            </svg>
          </div>
          <div className="w-full md:w-1/2 p-4 text-center md:text-left">
            <h3 className="text-3xl font-bold mb-2">{title}</h3>
            <p
              className="text-gray-700"
              onMouseLeave={() => setContent(fixedContent)}
              onClick={() => setFixedContent(content)}
            >
              {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
