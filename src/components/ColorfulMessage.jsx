import React from "react";

export const ColorfulMessage = (props) => {
  // console.log(props);
  const { color, children } = props;
  const contentStyle = {
    // オブジェクトのプロパティに対して変数で値を設定するとき、名前が同じであれば、変数名は省略できる
    color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

//export default ColofulMessage;
