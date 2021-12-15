import React from "react";

const MyName = ({ name }) => {
  return <div>안냥! 내이름은 {name} 인딩?</div>;
};

MyName.defaultProps = {
  name: "velopert"
};

export default MyName;
