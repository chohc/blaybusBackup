import { useNavigate } from "react-router-dom";
import colors from "../colors/colors";
import PressableButton from "../components/PressableButton";
import { theme } from "../themes/theme";
import Back from "../icons/arrow_back.svg";
import { useState } from "react";
import { NotificationBox } from "../components/NotificationBox";

const NotificationScreen = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filters = [
    { key: "all", label: "전체" },
    { key: "exp", label: "내 경험치" },
    { key: "notice", label: "게시판" },
  ];

  return (
    <div
      className="page"
      style={{
        ...theme.noticeTheme.container,
      }}
    >
      {/* header */}
      <div
        style={{
          ...theme.noticeTheme.header,
          justifyContent: "space-between",
        }}
      >
        <PressableButton
          onClick={() => navigate(-1)}
          pressedStyle={{ opacity: 0.5 }}
        >
          <img src={Back} alt="back" style={{ width: 24, height: 24 }} />
        </PressableButton>
        <span className="title-3-bold">알림</span>
        <div style={{ width: 24 }} />
      </div>
      {/* filter */}
      <div style={styles.filterContainer}>
        {filters.map((filter) => (
          <div
            key={filter.key}
            onClick={() => setSelectedFilter(filter.key)}
            style={{
              ...styles.filter,
              ...(filter.key === "all" && { padding: "7px 15px" }),
              ...(selectedFilter === filter.key && styles.filterActive),
            }}
          >
            <span
              className="Body-1-r"
              style={
                selectedFilter === filter.key
                  ? { fontWeight: 700, color: "#FFF" }
                  : { color: colors.gray[600] }
              }
            >
              {filter.label}
            </span>
          </div>
        ))}
      </div>
      {/* content */}
      <div
        style={{ width: "100%", padding: "0px 20px", color: colors.gray[600] }}
      >
        <NotificationBox
          type="exp"
          text="[1월 리더부여] ‘월특근 퀘스트’ 경험치가 100do 적립되었어요."
          date="2025.01.17"
        />
        <NotificationBox
          type="notice"
          text="AAA 프로젝트 신설 (경험치 500 do, 신청 마감 ~10/31)"
          date="2025.01.17"
        />
      </div>
    </div>
  );
};

const styles = {
  filterContainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    padding: "16px 20px",
    gap: 18,
    borderBottom: `1px solid ${colors.gray[100]}`,
  },
  filter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "7px 10px",
    backgroundColor: "#FFF",
    borderRadius: 24,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.gray[500],
    cursor: "pointer",
    WebkitTapHighlightColor: "transparent",
  },
  filterActive: {
    backgroundColor: colors.orange[500],
    borderColor: colors.orange[500],
  },
};

export default NotificationScreen;
