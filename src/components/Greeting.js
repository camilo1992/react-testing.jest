import { useState } from "react";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  const changeTextHandler = () => {
    setChangeText(!changeText);
  };

  return (
    <div>
      <h2>Hello World !</h2>
      {!changeText && <p>It's good to see you again !</p>}
      {/* <p>It's good to see you again !</p> */}
      {changeText && <p>text changed</p>}
      <button onClick={changeTextHandler}>Change text</button>
    </div>
  );
};

export default Greeting;
