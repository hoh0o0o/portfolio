import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LiplanPage from "./LiplanPage";
import LightPage from "./lightPage";
import HomePage from "./HomePage";

function App() {
  const [title, setTitle] = useState("");
  const [fixedTitle, setFixedTitle] = useState("");
  const [content, setContent] = useState("");
  const [fixedContent, setFixedContent] = useState("");
  const [hoveredPart, setHoveredPart] = useState(null);
  const [clickedPart, setClickedPart] = useState(null);
  const [showTriangles, setShowTriangles] = useState(false);
  const [mausePosition, setMausePosition] = useState({
    left: "calc(50% + 100px)", // waku.svgの右下に配置
    top: "calc(50% + 100px)",
  });
  const [text, setText] = useState("");
  const fullText =
    "Heello! I'm Haruho Nishimura! This is the portfolio site, a student living in Wakayama.";
  const [showCursor, setShowCursor] = useState(true);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTriangles(true);
    }, 2000);

    const interval = setInterval(() => {
      setMausePosition({
        left: "calc(50% + 100px)", // waku.svgの右下に配置
        top: "calc(50% + 100px)",
      });
      setTimeout(() => {
        setMausePosition({
          left: "calc(50% + 100px)",
          top: "calc(50% + 90px)",
        });
      }, 1000);
    }, 4000); // Change interval to 4 seconds

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setText((prev) =>
        index < fullText.length ? prev + fullText[index] : prev
      );
      index++;
      if (index >= fullText.length) {
        clearInterval(typingInterval);
      }
    }, 100); // Typing speed

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Cursor blink speed

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Router>
      <Routes>
        <Route path="/liplan" element={<LiplanPage />} />
        <Route path="/light" element={<LightPage />} />{" "}
        {/* 修正: LightPageに遷移 */}
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/"
          element={
            <>
              <div className="area">
                <div className="context">
                  <h1>Pure Css Animated Background</h1>
                </div>
                <div
                  className="background-animation"
                  style={{ overflow: "hidden" }}
                >
                  <svg
                    id="_レイヤー_2"
                    data-name="レイヤー_2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 168 168"
                    className="background-svg"
                  >
                    <defs>
                      <style>
                        {`
                        .cls-1 {
                          fill: #556959;
                        }
                        .cls-2 {
                          fill: rgba(255, 255, 255, 0.2);
                        }
                      `}
                      </style>
                    </defs>
                    <g id="_レイヤー_1-2" data-name="レイヤー_1">
                      <g>
                        <g>
                          <g id="_x3C_リピートラジアル_x3E_">
                            <circle className="cls-2" cx="84" cy="134" r="34" />
                          </g>
                          <g
                            id="_x3C_リピートラジアル_x3E_-2"
                            data-name="_x3C_リピートラジアル_x3E_"
                          >
                            <circle
                              className="cls-2"
                              cx="36.45"
                              cy="99.45"
                              r="34"
                            />
                          </g>
                          <g
                            id="_x3C_リピートラジアル_x3E_-3"
                            data-name="_x3C_リピートラジアル_x3E_"
                          >
                            <circle
                              className="cls-2"
                              cx="54.61"
                              cy="43.55"
                              r="34"
                            />
                          </g>
                          <g
                            id="_x3C_リピートラジアル_x3E_-4"
                            data-name="_x3C_リピートラジアル_x3E_"
                          >
                            <circle
                              className="cls-2"
                              cx="113.39"
                              cy="43.55"
                              r="34"
                            />
                          </g>
                          <g
                            id="_x3C_リピートラジアル_x3E_-5"
                            data-name="_x3C_リピートラジアル_x3E_"
                          >
                            <circle
                              className="cls-2"
                              cx="131.55"
                              cy="99.45"
                              r="34"
                            />
                          </g>
                        </g>
                        <circle className="cls-1" cx="84" cy="84" r="24" />
                      </g>
                    </g>
                  </svg>
                </div>
                <div
                  className={`bg-white min-h-screen font-sans ${
                    showTriangles ? "show-triangles" : ""
                  }`}
                  style={{
                    fontFamily: "'Yu Gothic', '游ゴシック', sans-serif",
                    fontWeight: "bold",
                    backgroundSize: "cover", // 背景の大きさを固定
                  }}
                >
                  <header
                    style={{
                      position: "fixed",
                      top: 0,
                      width: "100%",
                      zIndex: 1000,
                      backgroundColor: "white",
                      left: "50%",
                      transform: "translateX(-50%)",
                      padding: "10px 0", // ヘッダーの高さを狭く
                      borderBottom: "1px solid #e0e0e0", // 薄い灰色の線を追加
                    }}
                  >
                    <link
                      href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;700&display=swap"
                      rel="stylesheet"
                    />
                    <div className="container flex mx-auto p-3 flex-col md:flex-row items-center justify-center">
                      <nav
                        className="text-xl text-main font-normal"
                        style={{ fontWeight: "bold" }}
                      >
                        <a href="#home" className="mr-12 duration-300 nav-link">
                          Home
                        </a>
                        <a
                          href="#Works"
                          className="mr-12 duration-300 nav-link"
                        >
                          Works
                        </a>
                        <a
                          href="#Skills"
                          className="mr-12 duration-300 nav-link"
                        >
                          Skills
                        </a>
                        <a href="#About" className="duration-300 nav-link">
                          About
                        </a>
                      </nav>
                    </div>
                  </header>
                  {/* ヘッダーの高さ分だけ余白を追加 */}
                  <div
                    className="bg-main py-24 px-12 text-white flex items-center justify-center"
                    style={{
                      height: "80vh",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <ul
                      className="circles"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                      }}
                    >
                      <li>
                        <img src="/ohana.svg" alt="ohana" />
                      </li>
                      <li>
                        <img src="/ohana.svg" alt="ohana" />
                      </li>
                      <li>
                        <img src="/ohana.svg" alt="ohana" />
                      </li>
                      <li>
                        <img src="/ohana.svg" alt="ohana" />
                      </li>
                      <li>
                        <img src="/ohana.svg" alt="ohana" />
                      </li>
                      <li>
                        <img src="/ohana.svg" alt="ohana" />
                      </li>
                      <li>
                        <img src="/ohana.svg" alt="ohana" />
                      </li>
                      <li>
                        <img src="/ohana.svg" alt="ohana" />
                      </li>
                      <li>
                        <img src="/ohana.svg" alt="ohana" />
                      </li>
                      <li>
                        <img src="/ohana.svg" alt="ohana" />
                      </li>
                    </ul>
                    <div
                      style={{
                        textAlign: "left",
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      <div className="flex items-baseline">
                        <h1 className="text-4xl font-bold">
                          <span>{text.slice(0, 6)}</span> {/* "Hello!"の部分 */}
                        </h1>
                        <h1 className="text-4xl font-bold ml-4">
                          <span>{text.slice(6, 10)}</span>
                        </h1>{" "}
                        {/* 閉じタグを追加 */}
                      </div>
                      <h2 className="text-6xl font-bold">
                        <span>{text.slice(10, 28)}</span>
                      </h2>
                      <h2 className="text-xl font-normal mt-10">
                        <span>{text.slice(28)}</span>
                        {showCursor && <span>|</span>}
                      </h2>
                    </div>
                  </div>

                  <div
                    id="Works"
                    className="p-12 text-main"
                    style={{
                      /*backgroundColor: "#e6f7e6",*/
                      paddingRight: "20%",
                      paddingLeft: "20%",
                    }}
                  >
                    <div className="text-center mb-2">
                      <h2 className="text-3xl font-bold mb-4 inline-block relative">
                        Works
                        <span className="block w-8 h-1 bg-main mt-2 mx-auto"></span>
                      </h2>
                    </div>
                    <div className="container grid grid-cols-2 md:grid-cols-3 gap-2 justify-center">
                      <div className="work-item text-center flex flex-col items-center mb-2">
                        <Link to="/liplan">
                          <img
                            src="/liplan.png"
                            alt="Work 1"
                            className="w-200 h-200"
                            style={{
                              width: "100%",
                              maxWidth: "200px",
                              height: "auto",
                              maxHeight: "200px",
                            }}
                          />
                        </Link>
                        {/* <p className="text-sm text-gray-500 mt-4 mb-1">音楽ライブ参加者向けwebアプリ</p> */}
                        {/* <h3 className="text-xl font-bold">Liplan</h3> */}
                      </div>
                      <div className="work-item text-center flex flex-col items-center mb-2">
                        <Link to="/light">
                          <img
                            src="/light.png"
                            alt="Work 2"
                            className="w-200 h-200"
                            style={{
                              width: "100%",
                              maxWidth: "200px",
                              height: "auto",
                              maxHeight: "200px",
                            }}
                          />
                        </Link>
                        {/* <p className="text-sm text-gray-500 mt-4 mb-1">サブタイトル 2</p> */}
                        {/* <h3 className="text-xl font-bold">Work 2</h3> */}
                      </div>
                      <div className="work-item text-center flex flex-col items-center mb-2">
                        <Link to="/home">
                          <img
                            src="/home.png"
                            alt="Work 3"
                            className="w-200 h-200"
                            style={{
                              width: "100%",
                              maxWidth: "200px",
                              height: "auto",
                              maxHeight: "200px",
                            }}
                          />
                        </Link>
                        {/* <p className="text-sm text-gray-500 mt-4 mb-1">サブタイトル 3</p> */}
                        {/* <h3 className="text-xl font-bold">Work 3</h3> */}
                      </div>
                      {showMore && (
                        <>
                          <div className="work-item text-center flex flex-col items-center mb-2">
                            <img
                              src="/rei.png"
                              alt="Work 4"
                              className="w-200 h-200"
                              style={{
                                width: "100%",
                                maxWidth: "200px",
                                height: "auto",
                                maxHeight: "200px",
                              }}
                            />
                            {/* <p className="text-sm text-gray-500 mt-4 mb-1">サブタイトル 4</p> */}
                            {/* <h3 className="text-xl font-bold">Work 4</h3> */}
                          </div>
                          <div className="work-item text-center flex flex-col items-center mb-2">
                            <img
                              src="/rei.png"
                              alt="Work 5"
                              className="w-200 h-200"
                              style={{
                                width: "100%",
                                maxWidth: "200px",
                                height: "auto",
                                maxHeight: "200px",
                              }}
                            />
                            {/* <p className="text-sm text-gray-500 mt-4 mb-1">サブタイトル 5</p> */}
                            {/* <h3 className="text-xl font-bold">Work 5</h3> */}
                          </div>
                          <div className="work-item text-center flex flex-col items-center mb-2">
                            <img
                              src="/rei.png"
                              alt="Work 6"
                              className="w-200 h-200"
                              style={{
                                width: "100%",
                                maxWidth: "200px",
                                height: "auto",
                                maxHeight: "200px",
                              }}
                            />
                            {/* <p className="text-sm text-gray-500 mt-4 mb-1">サブタイトル 6</p> */}
                            {/* <h3 className="text-xl font-bold">Work 6</h3> */}
                          </div>
                        </>
                      )}
                    </div>
                    <div className="text-center mt-4">
                      <button
                        onClick={handleShowMore}
                        className="top-link text-main"
                      >
                        {showMore ? "閉じる" : "More"}
                      </button>
                    </div>
                  </div>

                  <div
                    id="Skills"
                    className="p-20 text-main relative overflow-hidden"
                    style={{ backgroundColor: " #fffdfa " }}
                  >
                    {/* 背景のohana.svgを削除 */}
                    <div className="text-center mb-2 relative z-10">
                      <h2 className="text-3xl font-bold mb-10 inline-block relative">
                        Skills
                        <span className="block w-8 h-1 bg-main mt-2 mx-auto"></span>
                      </h2>
                    </div>
                    <div className="container flex flex-wrap md:flex-nowrap items-center h-auto relative z-10">
                      <div className="w-full h-full md:w-1/2 p-4 text-center md:text-left relative">
                        {hoveredPart === "part1" || clickedPart === "part1" ? (
                          <img
                            src="/Orion_laptop-screen.svg"
                            alt="Orion Laptop Screen"
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            style={{ width: "100px", height: "auto" }}
                          />
                        ) : null}
                        {hoveredPart === "part2" || clickedPart === "part2" ? (
                          <img
                            src="/Orion_pen.svg"
                            alt="Orion Laptop Screen"
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            style={{ width: "100px", height: "auto" }}
                          />
                        ) : null}
                        {hoveredPart === "part3" || clickedPart === "part3" ? (
                          <img
                            src="/Orion_messaging-app.svg"
                            alt="Orion Laptop Screen"
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            style={{ width: "100px", height: "auto" }}
                          />
                        ) : null}
                        <svg
                          id="_レイヤー_2"
                          data-name="レイヤー_2"
                          xmlns="http://www.w3.org/2000/svg"
                          width="200"
                          height="200"
                          className="mx-auto md:mx-0 relative"
                          style={{
                            marginLeft: "auto",
                            marginRight: "auto",
                          }}
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
                                  hoveredPart === "part1" ||
                                  clickedPart === "part1"
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
                                  handleClick(
                                    "Programing",
                                    "基本的な情報処理能力",
                                    "part1"
                                  )
                                }
                              />
                              <path
                                className={`cls-1 ${
                                  hoveredPart === "part2" ||
                                  clickedPart === "part2"
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
                                  hoveredPart === "part3" ||
                                  clickedPart === "part3"
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
                        <style>
                          {`
                            @keyframes blink {
                              0% { opacity: 1; }
                              50% { opacity: 0; }
                              100% { opacity: 1; }
                            }
                          `}
                        </style>
                        <h3
                          className="text-main flex items-center justify-center"
                          style={{
                            position: "absolute",
                            top: "calc(50% - 120px)", // Skillsより下、waku.svgより上に配置
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: 2, // waku.svgの上に表示されるようにする
                            animation: "blink 1.5s infinite", // 点滅アニメーションを追加
                            padding: "5px 10px",
                            borderRadius: "5px",
                          }}
                        >
                          ＼ Click here! ／
                        </h3>
                      </div>
                      <div
                        className="w-full md:w-1/2 p-4 text-center md:text-left"
                        style={{
                          paddingLeft: window.innerWidth < 768 ? "20px" : "0",
                          paddingRight: window.innerWidth < 768 ? "20px" : "0",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems:
                              window.innerWidth > 1024 ? "center" : "center",
                            justifyContent:
                              window.innerWidth > 1024
                                ? "flex-start"
                                : "center",
                            flexDirection:
                              window.innerWidth > 1024 ? "row" : "column",
                            textAlign:
                              window.innerWidth > 1024 ? "left" : "center",
                          }}
                        >
                          <div>
                            <h3 className="text-3xl font-bold mb-2">{title}</h3>
                            <p
                              className="text-gray-700"
                              onMouseLeave={() => setContent(fixedContent)}
                              onClick={() => setFixedContent(content)}
                            >
                              {content}
                            </p>
                          </div>
                          {hoveredPart === "part1" ||
                          clickedPart === "part1" ? (
                            <img
                              src="/program.png"
                              alt="Program"
                              style={{
                                width: "200px",
                                height: "auto",
                                marginLeft:
                                  window.innerWidth > 1024 ? "20px" : "0",
                                marginTop:
                                  window.innerWidth > 1024 ? "0" : "10px",
                              }}
                            />
                          ) : null}
                          {hoveredPart === "part2" ||
                          clickedPart === "part2" ? (
                            <img
                              src="/Design.png"
                              alt="Design"
                              style={{
                                width: "200px",
                                height: "auto",
                                marginLeft:
                                  window.innerWidth > 1024 ? "20px" : "0",
                                marginTop:
                                  window.innerWidth > 1024 ? "0" : "10px",
                              }}
                            />
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="About"
                    className="p-12 text-main"
                    style={{
                      paddingLeft: window.innerWidth < 768 ? "10px" : "3rem",
                      paddingRight: window.innerWidth < 768 ? "10px" : "3rem",
                      wordWrap: "break-word", // 文字を折り返す
                    }}
                  >
                    <div className="text-center mb-2">
                      <h2 className="text-3xl font-bold mb-10 inline-block relative">
                        About
                        <span className="block w-8 h-1 bg-main mt-2 mx-auto"></span>
                      </h2>
                    </div>
                    <div className="container mx-auto flex flex-col lg:flex-row items-center">
                      <img
                        src="/kao.jpg"
                        alt="Profile"
                        className="w-32 h-32 ml-9 lg:w-48 lg:h-48 mb-4 lg:mb-0 lg:mr-32"
                        style={{
                          borderRadius: "50%", // まん丸くりぬく
                          transform: "rotate(-45deg)", // 左に45度回転
                          marginLeft: "auto", // 画面左から25%の位置に配置
                          marginRight: "auto",
                        }}
                      />
                      <div
                        className="text-left lg:text-left mx-auto"
                        style={{
                          maxWidth: "500px", // 常に同じ横幅に設定
                          width: "100%",
                          textAlign: "left", // 文字を左揃えに設定
                          wordWrap: "break-word", // 文字を折り返す
                          paddingLeft: window.innerWidth < 768 ? "20px" : "0",
                          paddingRight: window.innerWidth < 768 ? "20px" : "0",
                        }}
                      >
                        <p
                          style={{
                            fontSize:
                              window.innerWidth < 768 ? "1.2rem" : "1.5rem",
                            color: "#333",
                            wordWrap: "break-word",
                            textAlign:
                              window.innerWidth < 768 ? "center" : "left",
                          }}
                        >
                          西村はるほ
                        </p>
                        <p
                          style={{
                            fontSize:
                              window.innerWidth < 768 ? "1rem" : "1.2rem",
                            color: "#555",
                            wordWrap: "break-word",
                            textAlign: "left", // 文字を左揃えに設定
                          }}
                        >
                          和歌山大学システム工学部システム工学科
                        </p>
                        <p
                          style={{
                            fontSize:
                              window.innerWidth < 768 ? "1rem" : "1.2rem",
                            color: "#555",
                            wordWrap: "break-word",
                            textAlign: "left", // 文字を左揃えに設定
                          }}
                        >
                          メディアデザインメジャー 3年生
                        </p>
                        <p
                          style={{
                            fontSize:
                              window.innerWidth < 768 ? "1rem" : "1.2rem",
                            color: "#555",
                            wordWrap: "break-word",
                            textAlign: "left", // 文字を左揃えに設定
                          }}
                        >
                          デザインシステム計画研究室
                        </p>
                        <br />
                        <p
                          style={{
                            fontSize:
                              window.innerWidth < 768 ? "1rem" : "1.2rem",
                            color: "#777",
                            wordWrap: "break-word",
                            textAlign: "left", // 文字を左揃えに設定
                          }}
                        >
                          趣味：写真撮影、動画編集、音楽ライブ参加
                        </p>
                        <p
                          style={{
                            fontSize:
                              window.innerWidth < 768 ? "1rem" : "1.2rem",
                            color: "#777",
                            wordWrap: "break-word",
                            textAlign: "left", // 文字を左揃えに設定
                          }}
                        >
                          アルバイト：クレジットカードの営業
                        </p>
                      </div>
                    </div>
                    <div className="text-center mt-10">
                      <a
                        href="#"
                        onClick={scrollToTop}
                        className="top-link text-main"
                      >
                        Topへ
                      </a>
                    </div>
                    <style>
                      {`
                        a:hover span {
                          transform: scaleX(1);
                        }
                      `}
                    </style>
                  </div>
                  <div
                    className="p-12 bg-main relative overflow-hidden"
                    style={{ height: "200px" }}
                  >
                    <ul className="circles">
                      <li>
                        <img src="/ohana.svg" alt="ohana" />
                      </li>
                      <li>
                        <img src="/ohana.svg" alt="ohana" />
                      </li>
                      <li>
                        <img src="/ohana.svg" alt="ohana" />
                      </li>
                      <li>
                        <img src="/ohana.svg" alt="ohana" />
                      </li>
                      <li>
                        <img src="/ohana.svg" alt="ohana" />
                      </li>
                      <li>
                        <img src="/ohana.svg" alt="ohana" />
                      </li>
                      <li>
                        <img src="/ohana.svg" alt="ohana" />
                      </li>
                      <li>
                        <img src="/ohana.svg" alt="ohana" />
                      </li>
                      <li>
                        <img src="/ohana.svg" alt="ohana" />
                      </li>
                      <li>
                        <img src="/ohana.svg" alt="ohana" />
                      </li>
                    </ul>
                  </div>
                  {/* <img
                  src="/mause.svg"
                  alt="Mause"
                  className={`absolute ${
                    showTriangles ? "show-triangles" : ""
                  }`}
                  style={{
                    ...mausePosition,
                    width: "80px",
                    height: "auto",
                    transition:
                      "left 2s cubic-bezier(0.68, -0.55, 0.27, 1.55), top 1s ease-in-out",
                    display: "flex",
                    alignItems: "center",
                    zIndex: 3, // 他の要素の上に表示されるようにする
                  }}
                /> */}
                  <button
                    onClick={scrollToTop}
                    className={`fixed bottom-4 right-4 text-white bg-main ${
                      showScrollButton ? "block" : "hidden"
                    }`}
                    style={{
                      fontSize: "2rem",
                      padding: "0",
                      border: "none",
                      width: "2rem",
                      height: "2rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "transparent", // 背景色を透明に設定
                      top: "2rem", // ボタンをもう少し下に配置
                    }}
                  >
                    <i className="bi bi-arrow-up-square"></i>
                  </button>
                </div>
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
