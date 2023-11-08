import React, { ComponentProps } from "react";
import style from "./index.module.css";
// ! The Problem when we create reusable components like button, inputs, we writing unnecessarily native props as in own interface  or type like this

// ! PROBLEM
// type TInput = {
//   //! custom props
//   variant: "outline" | "contained";

//   //   //! native props
//   handleChange: (...params: any[]) => void;
//   readonly?: boolean;
//   type: "submit" | "text" | "tel" | "email" | "password"; //! etc
//   customClassName?: string;
//   value: string;
//   style?: React.CSSProperties;
//   // * and many more props which need as per the requirement
// };

// const index = (props: TInput) => {
//   const { customClassName, ...rest } = props;
//   return <input className={`${customClassName} ${style.input}`} {...rest} />;
// };

// export default index;

// !SOLUTION

type TInput = {
  variant: "outline" | "contained";
} & ComponentProps<"input">;
const index = (props: TInput) => {
  const { className, ...rest } = props;
  return <input {...rest} className={`${className} ${style.input}`}  />;
};

export default index;
