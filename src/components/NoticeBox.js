import React from "react";
import colors from "../colors/colors";
import { NoticeChip } from "../components/NoticeChip";
import PressableButton from "./PressableButton";

export const NoticeBox = ({ title, content, date, onClick }) => {
  return (
    <PressableButton
      onClick={onClick}
      style={styles.container}
      pressedStyle={{ backgroundColor: colors.gray[50] }}
    >
      <NoticeChip />
      <span
        className="subtitle-1-regular"
        style={{
          width: "100%",
          margin: "4px 0px",
          lineHeight: 1.4,
        }}
      >
        {title}
      </span>
      <span className="body-2-r" style={styles.contentText}>
        {content}
      </span>
      <span className="label-1-r" style={{ color: colors.gray[600] }}>
        {date}
      </span>
    </PressableButton>
  );
};

const styles = {
  container: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "start",
    padding: 20,
    borderBottom: `1px solid ${colors.gray[100]}`,
  },
  contentText: {
    color: colors.gray[600],
    display: "inline-block",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "100%",
    marginBottom: 8,
  },
};
