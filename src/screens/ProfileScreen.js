import React, { useState } from "react";
import "../fonts/font.css";
import colors from "../colors/colors";
import Profile from "../images/profile/임시.png";
import Setting from "../images/profile/settings.svg";
import GradeChip from "../components/GradeChip";
import Arrow from "../icons/keyboard_arrow_right.svg";
import PressableButton from "../components/PressableButton";

const ProfileScreen = () => {
  const Content = ({ text1, text2, isMargin }) => {
    return (
      <div
        style={{
          ...styles.rowContainer,
          ...(isMargin && styles.marginBottom32),
        }}
      >
        <span className="subtitle-1-bold" style={{ color: colors.gray[900] }}>
          {text1}
        </span>
        <span
          className="subtitle-1-regular"
          style={{ color: colors.gray[900] }}
        >
          {text2}
        </span>
      </div>
    );
  };

  return (
    <div className="page" style={styles.container}>
      <div style={styles.head}>
        <span className="title-3-bold">프로필</span>
      </div>
      <div style={styles.circle}>
        <img src={Profile} alt="이미지" style={styles.image} />
        <PressableButton
          onClick={() => console.log("설정 클릭")}
          style={styles.miniCircle}
          pressedStyle={{ backgroundColor: colors.gray[100] }}
        >
          <img src={Setting} alt="이미지" style={{ width: 24, height: 24 }} />
        </PressableButton>
      </div>
      <div style={styles.boxContainer}>
        <div style={{ ...styles.rowContainer, justifyContent: "flex-start" }}>
          <GradeChip text="F1-I" color={colors.Level.Bronze} />
          <span
            className="subtitle-1-bold"
            style={{ color: colors.gray[900], marginLeft: 12 }}
          >
            레벨업까지 <span style={{ color: colors.Level.Bronze }}>843do</span>{" "}
            남았어요!
          </span>
        </div>
        <div
          style={{
            ...styles.rowContainer,
            marginTop: 12,
          }}
        >
          <div style={styles.barContainer}>
            <div
              style={{
                ...styles.colorbar,
                width: "85%",
                backgroundColor: colors.Level.Bronze,
              }}
            />
          </div>
          <span className="subtitle-1-bold">85%</span>
        </div>
      </div>
      <div style={styles.boxContainer}>
        <Content text1="사번" text2="2023010101" isMargin={true} />
        <Content text1="이름" text2="김민수" isMargin={true} />
        <div style={{ ...styles.rowContainer, marginBottom: 32 }}>
          <span className="subtitle-1-bold" style={{ color: colors.gray[900] }}>
            소속 <span style={styles.line} /> 직무그룹
          </span>
          <span
            className="subtitle-1-regular"
            style={{ color: colors.gray[900] }}
          >
            음성 1센터 <span style={styles.line} /> 1
          </span>
        </div>
        <Content text1="입사일" text2="2023년 1월 1일" isMargin={false} />
      </div>
      <div style={styles.boxContainer}>
        <Content text1="아이디" text2="minsukim" isMargin={true} />
        <div style={styles.rowContainer}>
          <span className="subtitle-1-bold" style={{ color: colors.gray[900] }}>
            비밀번호 변경
          </span>
          <PressableButton
            onClick={() => console.log("비밀번호 변경 클릭")}
            style={{ cursor: "pointer" }}
            pressedStyle={{ opacity: 0.5 }}
          >
            <img src={Arrow} alt="arrow" />
          </PressableButton>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F4F4F4",
    padding: "3px 20px 0px 20px",
  },
  head: {
    display: "flex",
    width: 108,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    display: "flex",
    width: 135,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 107,
    marginTop: 20,
    marginBottom: 24,
    position: "relative",
  },
  image: { width: "100%", height: "100%", objectFit: "contain" },
  miniCircle: {
    display: "flex",
    width: 40,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 61,
    position: "absolute",
    bottom: 0,
    right: 0,
    cursor: "pointer",
    WebkitTapHighlightColor: "transparent", // 모바일 하이라이트 효과 제거
  },
  boxContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: 20,
    borderRadius: 16,
    backgroundColor: "#fff",
    marginBottom: 16,
  },
  rowContainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  barContainer: {
    display: "flex",
    width: "82%",
    height: 18,
    alignItems: "center",
    backgroundColor: colors.gray[300],
    borderRadius: 25,
    position: "relative",
  },
  colorbar: {
    display: "flex",
    height: 18,
    borderRadius: 25,
    position: "absolute",
    left: 0,
  },
  line: {
    display: "inline-block",
    width: 1,
    height: 12,
    backgroundColor: colors.gray[400],
    verticalAlign: "middle",
    margin: "0 3px",
  },
  marginBottom32: {
    marginBottom: 32,
  },
};

export default ProfileScreen;
