import React from "react";

type IconName = "star" | "sparkle";

interface IconProps {
  name: IconName;
  size?: number;
}

const icons: Record<IconName, JSX.Element> = {
  star: (
    <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" />
  ),
  sparkle: (
    <path d="M1 12L10.1667 10.1667L12 1L13.8333 10.1667L23 12L13.8333 13.8333L12 23L10.1667 13.8333L1 12Z" />
  ),
};

const Icon: React.FC<IconProps> = ({ name, size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="text-orange-500"
    >
      {icons[name]}
    </svg>
  );
};

export default Icon;
