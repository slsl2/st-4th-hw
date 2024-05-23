import React from "react";
import React from "react";
import BoxContainer from "./components/BoxContainer";
import Router from "./shared/Router.jsx";

function App() {
  // Box 를 클릭하면 해당 Box만 파란색이 되도록 해야 합니다. components/ 안의 컴포넌트들안에서 TODO를 확인하세요.
  // TODO: GlobalStyle 컴포넌트를 만들고 styled-reset 패키지로 스타일 초기화하고 App 컴포넌트에 적용해 보세요.
  return (
    <div>
      <h1>Clickable Boxes</h1>
      <BoxContainer />
    </div>
  );
  /**
   * TODO: 아래와 같은 구조로 컴포넌트를 만들고 Browser Router 설정하세요. UI는 신경쓰지 않습니다. 별도의 Router 컴포넌트 생성 여부는 자유입니다.
   * Home 컴포넌트는 <Link> 컴포넌트를 사용해서 Detail 컴포넌트로 이동하도록 하세요.
   * Detail 컴포넌트를 path parameter 로 id 를 받도록 하세요.
   * Detail 컴포넌트는 path parameter 로 받은 id 를 콘솔로그로 찍으세요.
   * 
   * src/
    |-- pages/
    |   |-- Home.jsx
    |   |-- Detail.jsx
    |-- App.jsx
   */

  return <Router />;
}

export default App;
