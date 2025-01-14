import React from "react";
import { theme } from "../../themes/theme";
import { useNavigate } from "react-router-dom";
import colors from "../../colors/colors";
import { NoticeBox } from "../../components/NoticeBox";

const NoticeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="page" style={theme.noticeTheme.container}>
      {/* header */}
      <div style={theme.noticeTheme.header}>
        <span className="title-3-bold">게시판</span>
      </div>

      <div style={styles.contentContainer}>
        <NoticeBox
          title="AAA 프로젝트 신설 (경험치 500 do, 신청 마감 ~10/31)"
          content="AAA프로젝트를 신설합니다. 참여를 원하시는 직원분들은 참여를
            부탁드립니다. 신청 마감은 10월 31일이며 프로젝트 참여 시 경험치
            500do를 드립니다."
          date="2025.01.17"
          onClick={() => {
            navigate("/notice-detail", {
              state: {
                title: "AAA 프로젝트 신설 (경험치 500 do, 신청 마감 ~10/31)",
                content:
                  "AAA프로젝트를 신설합니다. 참여를 원하시는 직원분들은 참여를 부탁드립니다. 신청 마감은 10월 31일이며 프로젝트 참여 시 경험치 500do를 드립니다.",
                date: "2025.01.17",
              },
            });
          }}
        />
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
    color: colors.gray[900],
  },
};

export default NoticeScreen;
