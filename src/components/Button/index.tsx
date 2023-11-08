import React, { ComponentProps } from "react";
import style from "./index.module.css";
// ! The Problem when we create reusable components like button, inputs, we writing unnecessarily native props as in own interface  or type like this

// ! PROBLEM
// type TButton = {
//   //! custom props
//   variant: "outline" | "contained";

//   //! native props
//   btnText: React.ReactNode;
//   color: "error" | "success";
//   handleClick: (...params: any[]) => void;
//   isDisable: boolean;
//   type: "submit" | "reset"; //! etc
//   role: "button" | "link"; //! etc
//   customClassName: string;
//   style?: React.CSSProperties;
//   // * and many more props which need as per the requirement
// };

// const index = (props: TButton) => {
//   const { btnText, customClassName, ...rest } = props;
//   return (
//     <button className={`${customClassName} ${style.button}`} {...rest}>
//       {btnText}
//     </button>
//   );
// };

// export default index;





















// !SOLUTION

type TButton = {
  children: React.ReactNode;
} & ComponentProps<"button">;
const index = (props: TButton) => {
  const { children, className, ...rest } = props;
  return (
    <button {...rest} className={`${className} ${style.button}`}>
      {children}
    </button>
  );
};

export default index;
