import React from "react";
import Input from "../../components/Input";
import style from "./index.module.css";
const CustomInput = () => {
  return (
    <>
      {/* //! problematic button */}
      {/* <Input
        type="email"
        variant="contained"
        handleChange={() => {}}
        value={"Hello"}
      /> */}
      {/* //! solution button */}
      <Input className={style.button1} variant="contained" />

    </>
  );
};

export default CustomInput;
