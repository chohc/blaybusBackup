import React, { useState } from "react";

const PressableButton = ({
  children,
  onClick,
  style,
  pressedStyle,
  ...props
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = (event) => {
    if (event.type === "mousedown" || event.type === "touchstart") {
      setIsPressed(true);
    } else if (
      event.type === "mouseup" ||
      event.type === "touchend" ||
      event.type === "mouseleave"
    ) {
      setIsPressed(false);
    }
  };

  return (
    <div
      onMouseDown={handlePress}
      onMouseUp={handlePress}
      onMouseLeave={handlePress}
      onTouchStart={handlePress}
      onTouchEnd={handlePress}
      onClick={onClick}
      style={{
        ...style,
        ...(isPressed ? pressedStyle : {}),
      }}
      role="button"
      aria-pressed={isPressed}
      {...props}
    >
      {children}
    </div>
  );
};

export default PressableButton;
