import React from "react";

const LevelChip = ({ text, color }) => {
  return (
    <div style={{ ...styles.container, backgroundColor: color }}>
      <span className="label-1-b" style={{ color: "#fff" }}>
        {text}
      </span>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: 26,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    padding: "0 12px",
  },
};

export default LevelChip;
