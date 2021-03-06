import React from "react";
import cn from "classnames";
import Button from "../Button";

const SMALL = "small";
const MEDIUM = "medium";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  text?: string;
  size?: typeof SMALL | typeof MEDIUM;
}

const PlusButton: React.FC<Props> = ({
  className,
  size,
  text,
  ...props
}: Props): React.ReactElement => (
  <div className="flex w-full justify-center">
    <Button
      styled={false}
      type="button"
      className={cn(
        "rounded flex items-center hover:bg-white-o-05",
        { "p-8": size === "medium", "p-2": size === "small" },
        className
      )}
      {...props}
    >
      <span
        className={cn({
          "text-2xl": size === "medium",
          "text-xl": size === "small"
        })}
      >
        <span className="fas fa-plus-circle mr-2 text-lg" />
        {text ? ` ${text}` : ""}
      </span>
    </Button>
  </div>
);

PlusButton.defaultProps = {
  size: MEDIUM,
  text: "New"
} as Props;

export default PlusButton;
