import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';

function App() {

  let [titles, setTitles] = useState(["서울시 맛집 정보", "경기도 맛집 정보", "대구 맛집 정보"]);
  let [contents, setContents] = useState(["서울 맛집 그것은 진짜 맛있다.", "경기도 맛집 그것은 진짜 맛있다.", "대구 맛집 그것은 진짜 맛있다."]);
  let [like, setLike] = useState(0);

  function modiTitle() {
    let newTitles = [...titles]; // ... stread operator(전개 연산자) 이유는 모든 벼수는
    newTitles[0] = "부산 맛집 정보";
    setTitles(newTitles);
  };
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>BLOG</div>
      </div>
      <button onClick={ modiTitle }>버튼</button>
      <div className="list">
        <h3> { titles[0] } <span onClick={ () => { setLike(like + 1) } }>👍</span> { like } </h3>
        <p> { contents[0] } </p>
        <hr/>
        <h3> { titles[1] } </h3>
        <p> { contents[1] } </p>
        <hr/>
        <h3> { titles[2] } </h3>
        <p> { contents[2] } </p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
