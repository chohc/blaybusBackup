import React, { useEffect, useState } from "react";
import "../fonts/font.css";
import colors from "../colors/colors";
import Profile from "../images/profile/임시.png";
import Setting from "../images/profile/settings.svg";
import GradeChip from "../components/GradeChip";
import Arrow from "../icons/keyboard_arrow_right.svg";
import PressableButton from "../components/PressableButton";
import { theme } from "../themes/theme";
import { useNavigate } from "react-router-dom";
import { customAxios } from "../customAxios";
import Modal from "../components/Modal/Modal";

const ProfileScreen = () => {
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const loadUserInfo = async () => {
      try {
        const response = await customAxios.get("/members/info");
        console.log("GET memberinfo: ", response.data);
      } catch (error) {
        console.error("GET error: ", error);
      }
    };
    loadUserInfo();
  }, []);

  const Content = ({ text1, text2, isMargin }) => {
    return (
      <div
        style={{
          ...theme.boxTheme.rowContainer,
          ...(isMargin && styles.marginBottom24),
        }}
      >
        <span className="subtitle-1-bold">{text1}</span>
        <span className="subtitle-1-regular">{text2}</span>
      </div>
    );
  };

  return (
    <div className="page" style={{ ...theme.pinkPage.container }}>
      <div style={theme.pinkPage.head}>
        <span className="title-3-bold">프로필</span>
      </div>
      <div style={styles.circle}>
        <img src={Profile} alt="이미지" style={styles.image} />
        <PressableButton
          onClick={() => setModalVisible(!modalVisible)}
          style={styles.miniCircle}
          pressedStyle={{ backgroundColor: colors.gray[100] }}
        >
          <img src={Setting} alt="이미지" style={{ width: 24, height: 24 }} />
        </PressableButton>
      </div>
      <div style={theme.boxTheme.boxContainer}>
        <div
          style={{
            ...theme.boxTheme.rowContainer,
            marginBottom: 12,
          }}
        >
          <div style={styles.subContainer}>
            <GradeChip text="F1 - I" color={colors.Level.Bronze} />
            <span className="Body-2-b" style={{ marginLeft: 8 }}>
              총 누적 경험치
            </span>
          </div>
          <div style={styles.subContainer}>
            <span className="Body-2-b" style={{ color: colors.Level.Bronze }}>
              12,657
            </span>
            <pre className="Body-2-b" style={{ color: colors.gray[600] }}>
              {" "}
              / 13,500do
            </pre>
          </div>
        </div>
        <div style={theme.boxTheme.barContainer}>
          <div
            style={{
              ...theme.boxTheme.colorbar,
              width: "85%",
              backgroundColor: colors.Level.Bronze,
            }}
          />
        </div>
        <div style={{ ...theme.boxTheme.rowContainer, marginTop: 8 }}>
          <span className="label-1-r">F1 - I</span>
          <div style={styles.subContainer}>
            <span className="label-1-b" style={{ color: colors.Level.Bronze }}>
              863do
            </span>
            <pre className="label-1-r" style={{ color: colors.gray[600] }}>
              {" "}
              남았어요!
            </pre>
          </div>
          <span className="label-1-r">F1 - II</span>
        </div>
      </div>
      <div style={theme.boxTheme.boxContainer}>
        <Content text1="사번" text2="2023010101" isMargin={true} />
        <Content text1="이름" text2="김민수" isMargin={true} />
        <div
          style={{ ...theme.boxTheme.rowContainer, ...styles.marginBottom24 }}
        >
          <span className="subtitle-1-bold">
            소속 <span style={styles.line} /> 직무그룹
          </span>
          <span className="subtitle-1-regular">
            음성 1센터 <span style={styles.line} /> 1
          </span>
        </div>
        <Content text1="입사일" text2="2023년 1월 1일" isMargin={false} />
      </div>
      <div style={{ ...theme.boxTheme.boxContainer, marginBottom: 29 }}>
        <Content text1="아이디" text2="minsukim" isMargin={true} />
        <div style={theme.boxTheme.rowContainer}>
          <span className="subtitle-1-bold">비밀번호 변경</span>
          <PressableButton
            onClick={() => console.log("비밀번호 변경 클릭")}
            pressedStyle={{ opacity: 0.5 }}
          >
            <img src={Arrow} alt="arrow" />
          </PressableButton>
        </div>
      </div>
      <Modal visible={modalVisible} onClose={() => setModalVisible(false)} />
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
    backgroundColor: colors.Primary.bg,
    padding: "3px 20px",
  },
  subContainer: { display: "flex", alignItems: "center" },
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
    height: 135,
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
  },
  line: {
    display: "inline-block",
    width: 1,
    height: 12,
    backgroundColor: colors.gray[400],
    verticalAlign: "middle",
    margin: "0 3px",
  },
  marginBottom24: {
    marginBottom: 24,
  },
};

export default ProfileScreen;
