import React from "react";
import { theme } from "../../themes/theme";
import Back from "../../icons/arrow_back.svg";
import PressableButton from "../../components/PressableButton";
import { useLocation, useNavigate } from "react-router-dom";
import colors from "../../colors/colors";
import { NoticeChip } from "../../components/NoticeChip";

const NoticeDetailScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { title, content, date } = location.state || {};

  return (
    <div
      className="page"
      style={{ ...theme.pinkPage.container, padding: "3px 0px 0px 0px" }}
    >
      {/* header */}
      <div
        style={{
          ...theme.pinkPage.head,
          width: "100%",
          justifyContent: "space-between",
          padding: "0px 16px",
        }}
      >
        <PressableButton
          onClick={() => navigate(-1)}
          pressedStyle={{ opacity: 0.5 }}
        >
          <img src={Back} alt="back" style={{ width: 24, height: 24 }} />
        </PressableButton>
        <span className="title-3-bold">게시판</span>
        <div style={{ width: 24 }} />
      </div>

      <div style={styles.contentContainer}>
        {/* title */}
        <NoticeChip />
        <span
          className="title-3-bold"
          style={{
            width: "100%",
            margin: "16px 0px 8px 0px",
            lineHeight: 1.4,
          }}
        >
          {title}
        </span>
        <span className="label-1-r" style={{ color: colors.gray[600] }}>
          {date}
        </span>
        <div style={styles.line} />
        {/* content */}
        <span className="body-2-r" style={{ width: "100%", lineHeight: 1.3 }}>
          {content}
        </span>
      </div>
    </div>
  );
};

const styles = {
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    width: "100%",
    alignItems: "start",
    backgroundColor: "#FFF",
    padding: 20,
    color: colors.gray[900],
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: colors.gray[100],
    margin: "16px 0px",
  },
};

export default NoticeDetailScreen;
