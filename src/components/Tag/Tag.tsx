import React from "react";
import classes from "./Tag.module.css";
import cn from "classnames";

type TagProps = {
  color: "red" | "blue" | "yellow";
  children: React.ReactNode;
};

export const Tag = ({ color = "red", children }: TagProps) => {
  return <div className={cn(classes.tags, classes[color])}>{children}</div>;
};
