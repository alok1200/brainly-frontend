// import type { ReactElement } from "react";

// export interface ButtonProps {
//   vsrint: "primary" | "secondary";
//   size: "small" | "medium" | "large";
//   text: string;
//   startIcon?: ReactElement | any;
//   endIcon?: ReactElement | any;
//   onClick: () => void;
// }

// export const Button = (props: ButtonProps) => {
//   <button></button>;
// };

// <button
//   variant="primary"
//   size="medium"
//   onClick={() => {}}
//   text="this"
// ></button>;

import type { ReactElement } from "react";

export interface ButtonProps {
  variant?: "primary" | "secondary"; // optional
  size?: "small" | "medium" | "large"; // optional
  text?: string; // optional
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void; // optional
}

export const Button = ({
  variant = "primary",
  size = "medium",
  text = "Button",
  startIcon,
  endIcon,
  onClick = () => {},
}: ButtonProps) => {
  return (
    <button className={`btn ${variant} ${size}`} onClick={onClick}>
      {startIcon && <span className="icon">{startIcon}</span>}
      {text}
      {endIcon && <span className="icon">{endIcon}</span>}
    </button>
  );
};
