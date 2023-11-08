import React from "react";
import CustomButton from "./views/Button";
import CustomInput from "./views/Input";

const App = () => {
  return (
    <div>
      <center>
        <h1>Use Typescript better with ReactJS</h1>
      </center>
      <CustomButton />
      <div>
        <CustomInput />
      </div>
    </div>
  );
};

export default App;
