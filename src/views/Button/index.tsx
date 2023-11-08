import React from "react";
import Button from "../../components/Button";
import style from "./index.module.css";
const CustomButton = () => {
  return (
    <>
      {/* //! problematic button */}
      {/* <Button
        btnText="Hello wrong typescript usage button"
        color="error"
        customClassName="my-class"
        handleClick={() => {}}
        isDisable={false}
        role="button"
        type="submit"
        variant="contained"
      /> */}
      {/* //! solution button */}
      <Button className={style.button1}>
        Hello Correct Typescript usage button
      </Button>
    </>
  );
};

export default CustomButton;
