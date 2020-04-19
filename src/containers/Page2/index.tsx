import React from "react";
import { useHistory } from "react-router-dom";
import { PATH_PREFIX } from "src/App";

const Page2: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>Page2</h1>
      <button onClick={() => history.push(PATH_PREFIX + "/")}>Page1</button>
      <button onClick={() => history.push(PATH_PREFIX + "/page2")}>Page2</button>
      <button onClick={() => history.push(PATH_PREFIX + "/page3")}>Page3</button>
    </>
  );
};

export default Page2;
