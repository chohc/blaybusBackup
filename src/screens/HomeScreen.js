import React from "react";
import "../fonts/font.css";
import "../App.css";
import "./HomeScreen.css";
import colors from "../colors/colors";
import gif1 from "../images/home/gif1.gif";
import HomeTree from "../images/home/HomeTree.png";
import HomeBackground from "../images/home/HomeBackground.png";
import dart from "../images/exp/exp_dart.png";
import chevronRight from "../icons/chevron_right.png";

const HomeScreen = () => {
  const styles = {
    scrollView: {
      backgroundImage: `url(${HomeBackground})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "844px",
      width: "390px",
      overflow: "hidden",
      paddingTop: "64px",
    },
    column: {
      alignSelf: "stretch",
      background: "#FFFFFF",
      borderRadius: "16px",
      padding: "20px",
      marginBottom: "30px",
      marginLeft: "17px",
      marginRight: "17px",
      boxShadow: "0px 2px 11px #9E1F0026",
    },
    rowView: {
      alignSelf: "stretch",
      display: "flex",
      alignItems: "center",
      marginBottom: "11px",
    },
    button: {
      width: "51px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: "#816043",
      borderRadius: "8px",
      border: "none",
      paddingTop: "8px",
      paddingBottom: "8px",
      marginRight: "8px",
      textAlign: "left",
      color: "#FFFFFF",
      fontSize: "12px",
      fontWeight: "bold",
    },
    progressBarBackground: {
      alignSelf: "stretch",
      background: "#DCDEE3",
      borderRadius: "25px",
      height: "12px",
      marginBottom: "10px",
      display: "flex",
    },
    progressBarFill: {
      background: "#816043",
      width: "85%",
      height: "100%",
      borderRadius: "25px",
    },
    treeImage: {
      position: "absolute",
      zIndex: 1,
      width: "338px",
      height: "271px",
      marginTop: "190px",
    },
    gifImage: {
      position: "relative",
      zIndex: 2,
      width: "255px",
      height: "297px",
      marginLeft: "10px",
    },
    absoluteColumn: {
      position: "absolute",
      top: "610px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "390px",
      height: "196px",
      background: "#FFFFFFB0",
      borderRadius: "16px",
      gap: "20px",
      padding: "20px",
      boxShadow: "0px 2px 11.8px 0px rgba(158, 31, 0, 0.15)",
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

  return (
    <div className="page" style={styles.scrollView}>
      <div style={styles.column}>
        <div style={styles.rowView}>
          <button style={styles.button} onClick={() => alert("Pressed!")}>
            F1 - I
          </button>
          <span style={styles.textTitle}>총 획득 경험치</span>
          <div style={{ flex: 1 }}></div>
          <span style={styles.textHighlight}>12,657</span>
          <span style={styles.textDivider}>/</span>
          <span style={styles.textDivider}>13,500</span>
          <span style={styles.textDivider}>do</span>
        </div>
        <div style={styles.progressBarBackground}>
          <div style={styles.progressBarFill}></div>
        </div>
        <div style={styles.rowView}>
          <span style={{ ...styles.textSmall, flex: 1, marginRight: "4px" }}>
            F1 - I
          </span>
          <span style={styles.textHighlight}>863do</span>
          <span style={styles.textSubtle}>남았어요!</span>
          <span style={styles.textSmall}>F1 - Ⅱ</span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={HomeTree} alt="Tree Background" style={styles.treeImage} />
        <img src={gif1} alt="Animated character" style={styles.gifImage} />
      </div>
      <div style={styles.absoluteColumn}>
        <div style={styles.rowView}>
          <span
            style={{
              color: colors.gray[900],
              fontSize: "18px",
              fontWeight: "bold",
              flex: 1,
              marginRight: "4px",
            }}
          >
            최근 획득한 경험치
          </span>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={styles.textDivider}>자세히보기</span>
            <img
              src={chevronRight}
              alt="Chevron Right"
              style={styles.chevronRightIcon}
            />
          </div>
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

export default HomeScreen;
