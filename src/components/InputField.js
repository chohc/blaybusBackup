import React from "react";
import "../App.css";
import colors from "../colors/colors";

const InputField = ({
  type = "text",
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
  isFocused,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      className="Body-1-r"
      style={{
        color: colors.gray[900],
        marginBottom: type === "password" ? 24 : 16,
        width: "calc(100% - 40px)",
        maxWidth: 400,
        borderRadius: 8,
        border: "1px solid",
        padding: 18,
        outline: "none",
        transition: "border-color 0.3s",
        borderColor: isFocused ? "black" : colors.gray[400],
      }}
    />
  );
};

export default InputField;