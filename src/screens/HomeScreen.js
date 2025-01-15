import React, { useEffect, useState } from "react";
import "../fonts/font.css";
import "../App.css";
import "./HomeScreen.css";
import colors from "../colors/colors";
import gif1 from "../images/home/gif1.gif";
import HomeTree from "../images/home/HomeTree.png";
import HomeBackground from "../images/home/HomeBackground.png";
import dart from "../images/exp/exp_dart.png";
import chevronRight from "../icons/chevron_right.png";
import { MyExpBox } from "../components/MyExpBox";
import { theme } from "../themes/theme";
import PressableButton from "../components/PressableButton";
import { useNavigate } from "react-router-dom";
import { customAxios } from "../customAxios";

const HomeScreen = () => {
  const navigate = useNavigate();
  const [levelName, setLevelName] = useState("");
  const [totalExperience, setTotalExperience] = useState("");

  useEffect(() => {
    const loadUserInfo = async () => {
      try {
        const { data } = await customAxios.get("/members/info");
        console.log("GET: ", data);
        setTotalExperience(data.totalExperience);
        setLevelName(data.levelName);
      } catch (error) {
        console.error("GET error: ", error);
      }
    };
    loadUserInfo();
  }, []);

  return (
    <div className="page" style={styles.container}>
      {/* total experience */}
      <div style={{ width: "100%", padding: "0px 20px" }}>
        <MyExpBox
          levelName={levelName}
          totalExperience={totalExperience}
          bgWhite={true}
        />
      </div>
      {/* vedio */}
      <div style={styles.vedioContainer}>
        <img src={HomeTree} alt="Tree Background" style={styles.treeImage} />
        <img src={gif1} alt="Animated character" style={styles.gifImage} />
      </div>
      {/* recent experience */}
      <div
        style={{
          ...theme.boxTheme.boxContainer,
          boxShadow: "0px -2px 8px rgba(159, 32, 0, 0.16)",
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          paddingBottom: 54,
        }}
      >
        <div style={{ ...theme.boxTheme.rowContainer, marginBottom: 12 }}>
          <span className="title-3-bold" style={{ color: colors.gray[900] }}>
            최근 획득한 경험치
          </span>
          <PressableButton
            onClick={() => {
              // 경험치 목록으로 이동
            }}
            style={{ display: "flex", alignItems: "center" }}
            pressedStyle={{ opacity: 0.5 }}
          >
            <span className="label-1-r" style={{ color: colors.gray[600] }}>
              자세히보기
            </span>
            <img
              src={chevronRight}
              alt="arrow"
              style={{ height: 12, marginLeft: 8 }}
            />
          </PressableButton>
        </div>

        <div style={styles.recentExpContainer}>
          <div style={styles.recentExpIcon}>
            <img src={dart} alt="Icon" style={styles.recentExpIconImage} />
          </div>
          <div style={styles.recentExpDetails}>
            <div style={styles.recentExpDetailRow}>
              <span style={styles.recentExpDetailTitle}>월특근</span>
              <div style={styles.recentExpBadge}>
                <span style={styles.recentExpBadgeText}>리더부여</span>
              </div>
            </div>
            <div style={styles.recentExpDetailRow}>
              <div style={styles.recentExpMaxBadge}>
                <span style={styles.recentExpMaxBadgeText}>MAX 달성</span>
              </div>
              <div style={styles.recentExpMonthBadge}>
                <span style={styles.recentExpMonthBadgeText}>1월</span>
              </div>
            </div>
            <div style={styles.recentExpDateRow}>
              <span style={styles.recentExpDate}>2024.05.12</span>
              <img src={dart} alt="Divider" style={styles.recentExpDivider} />
              <span style={styles.recentExpCount}>5회</span>
            </div>
          </div>
          <span style={styles.recentExpPoint}>100</span>
          <span style={styles.recentExpPointUnit}>do</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundImage: `url(${HomeBackground})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100%",
    // overflow: "hidden",
    paddingTop: 20,
  },
  vedioContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingBottom: 30,
  },
  treeImage: {
    position: "absolute",
    zIndex: 1,
    width: "338px",
    height: "271px",
    bottom: 236,
  },
  gifImage: {
    position: "relative",
    zIndex: 2,
    width: "255px",
    height: "297px",
    marginLeft: "10px",
  },
  recentExpContainer: {
    display: "flex",
    alignItems: "center",
    background: "#ffffff",
    padding: "20px",
    borderRadius: "16px",
    boxShadow: "0px 2px 11px #9E1F0026",
  },
  recentExpIcon: {
    width: "80px",
    height: "80px",
    background: "#FFCCC0",
    borderRadius: "100px",
    paddingLeft: "12px",
    marginRight: "18px",
  },
  recentExpIconImage: {
    height: "66px",
    marginTop: "4px",
    objectFit: "fill",
  },
  recentExpDetails: {
    flex: 1,
    marginRight: "4px",
  },
  recentExpDetailRow: {
    display: "flex",
    alignItems: "center",
    marginBottom: "8px",
  },
  recentExpDetailTitle: {
    color: "#212124",
    fontSize: "14px",
    fontWeight: "bold",
    marginRight: "10px",
  },
  recentExpBadge: {
    width: "58px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#FFEFEB",
    borderRadius: "16px",
    paddingTop: "5px",
    paddingBottom: "5px",
  },
  recentExpBadgeText: {
    color: "#FF5C35",
    fontSize: "12px",
    fontWeight: "bold",
  },
  recentExpMaxBadge: {
    width: "66px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#28BF4F",
    borderRadius: "8px",
    paddingTop: "5px",
    paddingBottom: "5px",
    marginRight: "8px",
  },
  recentExpMaxBadgeText: {
    color: "#FFFFFF",
    fontSize: "12px",
  },
  recentExpMonthBadge: {
    width: "32px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#EAEBEE",
    borderRadius: "8px",
    paddingTop: "5px",
    paddingBottom: "5px",
  },
  recentExpMonthBadgeText: {
    color: colors.gray[600],
    fontSize: "12px",
  },
  recentExpDateRow: {
    display: "flex",
    alignItems: "center",
    marginRight: "15px",
  },
  recentExpDate: {
    color: colors.gray[600],
    fontSize: "12px",
    marginRight: "11px",
  },
  recentExpDivider: {
    width: "1px",
    height: "7px",
    marginRight: "7px",
    objectFit: "fill",
  },
  recentExpCount: {
    color: colors.gray[900],
    fontSize: "12px",
    fontFamily: "Pretendard",
    flex: 1,
  },
  recentExpPoint: {
    color: colors.gray[900],
    fontSize: "14px",
    fontWeight: "bold",
    marginRight: "3px",
    fontFamily: "Pretendard",
  },
  recentExpPointUnit: {
    color: colors.gray[600],
    fontSize: "14px",
    fontWeight: "bold",
    fontFamily: "Pretendard",
  },
  textTitle: {
    color: colors.gray[900],
    fontSize: "14px",
    fontWeight: "bold",
    fontFamily: "Pretendard",
  },
  textHighlight: {
    color: "#816043",
    fontSize: "14px",
    fontWeight: "bold",
    marginRight: "6px",
  },
  textDivider: {
    color: colors.gray[600],
    fontSize: "14px",
    fontFamily: "Pretendard",
    marginRight: "6px",
  },
  textSmall: {
    color: colors.gray[900],
    fontSize: "12px",
    fontFamily: "Pretendard",
  },
  textSubtle: {
    color: colors.gray[600],
    fontSize: "12px",
    marginRight: "86px",
    fontFamily: "Pretendard",
  },
  chevronRightIcon: {
    width: "7px",
    height: "11px",
    marginRight: "6px",
  },
};

export default HomeScreen;
