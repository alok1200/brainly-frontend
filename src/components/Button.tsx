import type { ReactElement } from "react";

export interface ButtonProps {
  variant: "primary" | "secondary";
  size: "small" | "medium" | "large";
  text: string;
  startIcon?: ReactElement | any;
  endIcon?: ReactElement | any;
  onClick: () => void;
}

const defaultStyles = "rounded-md ";

const sizeStyles = {
  small: "py-1, px-2",
  medium: "py-2, px-4",
  large: "py-4, px-6",
};

const variantStyles = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-300 text-purple-600",
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`${variantStyles[props.variant]} ${defaultStyles} ${
        sizeStyles[props.size]
      }`}
    >
      {props.startIcon}
      {props.text}
      {props.endIcon}
    </button>
  );
};

// Example usage
<Button variant="primary" size="medium" onClick={() => {}} text="abcd" />;

// import type { ReactElement } from "react";

// export interface ButtonProps {
//   variant?: "primary" | "secondary"; // optional
//   size?: "small" | "medium" | "large"; // optional
//   text?: string; // optional
//   startIcon?: ReactElement;
//   endIcon?: ReactElement;
//   onClick?: () => void; // optional
// }

// export const Button = ({
//   variant = "primary",
//   size = "medium",
//   text = "Button",
//   startIcon,
//   endIcon,
//   onClick = () => {},
// }: ButtonProps) => {
//   return (
//     <button className={`btn ${variant} ${size}`} onClick={onClick}>
//       {startIcon && <span className="icon">{startIcon}</span>}
//       {text}
//       {endIcon && <span className="icon">{endIcon}</span>}
//     </button>
//   );
// };
