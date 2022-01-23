import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';

function App() {

  let [titles, setTitles] = useState(["서울시 맛집 정보", "경기도 맛집 정보", "대구 맛집 정보"]);
  let [contents, setContents] = useState(["서울 맛집 그것은 진짜 맛있다.", "경기도 맛집 그것은 진짜 맛있다.", "대구 맛집 그것은 진짜 맛있다."]);
  let [like, setLike] = useState(0);
  let [modal, setModal] = useState(false);

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

      { titles.map( (e, i) => 
        (<div className="list">
          <h3> { e } <span onClick={ () => { setLike(like + 1) } }>👍</span> { like } </h3>
          <p> { contents[i] } </p>
          <hr/>
        </div>)
      ) }

      <button onClick={ () => { setModal(true); } }>열기</button>
      <button onClick={ () => { setModal(false); } }>닫기</button>

      { modal === true ? <Modal/> : null }

    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  );
}

export default App;
