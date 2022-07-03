import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => {
    alert();
  };
  const [num, setNum] = useState(0);
  const [showFaceFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!showFaceFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        showFaceFlag || setFaceShowFlag(true);
      } else {
        showFaceFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disabel-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ！！</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {showFaceFlag && <p>(^^)/</p>}
    </>
  );
};

export default App;
