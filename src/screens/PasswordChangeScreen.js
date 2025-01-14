import React, { useState } from "react";
import "../App.css";
import arrowback from "../images/arrow_back.png";
import visibility from "../images/visibility.png";
import visibilityoff from "../images/visibility_off.png";
import colors from "../colors/colors";
import "../fonts/font.css";
import { customAxios } from "../customAxios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import PressableButton from "../components/PressableButton";

const PasswordChangeScreen = () => {
  const navigate = useNavigate();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isButtonDisabled =
    !currentPassword || !newPassword || newPassword !== confirmPassword;

  const commonInputContainerStyle = {
    alignSelf: "stretch",
    display: "flex",
    alignItems: "center",
    borderRadius: 8,
    border: "1px solid #D1D3D8",
    paddingLeft: 18,
    paddingRight: 18,
    marginLeft: 20,
    marginRight: 20,
  };

  const togglePasswordVisibility = (type) => {
    if (type === "current") {
      setShowCurrentPassword(!showCurrentPassword);
    } else if (type === "new") {
      setShowNewPassword(!showNewPassword);
    } else if (type === "confirm") {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const handleChangePassword = async () => {
    try {
      const response = await customAxios.put("/update-pw", {
        oldPassword: currentPassword,
        newPassword: newPassword,
      });
      console.log("비밀번호변경: ", response);
      navigate(-1);
      toast.success("비밀번호 변경 완료!", {
        duration: 1000,
      });
    } catch (error) {
      console.warn("비밀번호변경", error);
    }
  };

  return (
    <div className="page" style={styles.container}>
      <div style={styles.headerContainer}>
        <PressableButton
          onClick={() => navigate(-1)}
          pressedStyle={{ opacity: 0.5 }}
        >
          <img src={arrowback} style={styles.arrowback} alt="arrowback" />
        </PressableButton>
        <span className="title-3-bold">비밀번호 변경</span>
      </div>
      <span style={styles.label}>{"현재 비밀번호"}</span>
      <div
        style={{
          ...commonInputContainerStyle,
          marginBottom: 12,
        }}
      >
        <input
          type={showCurrentPassword ? "text" : "password"}
          placeholder={"현재 비밀번호"}
          value={currentPassword}
          onChange={(event) => setCurrentPassword(event.target.value)}
          style={styles.input}
        />
        <img
          src={showCurrentPassword ? visibilityoff : visibility}
          style={styles.eyeIcon}
          alt="Eye Icon"
          onClick={() => togglePasswordVisibility("current")}
        />
      </div>
      <span style={styles.label}>{"새 비밀번호"}</span>
      <div
        style={{
          ...commonInputContainerStyle,
          marginBottom: 12,
        }}
      >
        <input
          type={showNewPassword ? "text" : "password"}
          placeholder={"새 비밀번호"}
          value={newPassword}
          onChange={(event) => setNewPassword(event.target.value)}
          style={styles.input}
        />
        <img
          src={showNewPassword ? visibilityoff : visibility}
          style={styles.eyeIcon}
          alt="Eye Icon"
          onClick={() => togglePasswordVisibility("new")}
        />
      </div>
      <div
        style={{
          ...commonInputContainerStyle,
          marginBottom: 24,
        }}
      >
        <input
          type={showConfirmPassword ? "text" : "password"}
          placeholder={"새 비밀번호 확인"}
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          style={styles.input}
        />
        <img
          src={showConfirmPassword ? visibilityoff : visibility}
          style={styles.eyeIcon}
          alt="Eye Icon"
          onClick={() => togglePasswordVisibility("confirm")}
        />
      </div>
      <button
        style={isButtonDisabled ? styles.disabledButton : styles.button}
        onClick={handleChangePassword}
        disabled={isButtonDisabled}
      >
        <span
          style={{
            color: isButtonDisabled ? colors.gray[500] : "#FFFFFF", // 텍스트 색상 동적 설정
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          {"비밀번호 변경"}
        </span>
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "flex-start",
  },
  headerContainer: {
    alignSelf: "stretch",
    display: "flex",
    alignItems: "center",
    marginLeft: 30,
    marginRight: 17,
    marginTop: 3,
    width: 390,
    height: 45,
    marginBottom: 5,
  },
  arrowback: {
    width: 10,
    height: 18,
    marginRight: 107,
    objectFit: "fill",
  },
  label: {
    color: colors.gray[900],
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 15,
    marginLeft: 21,
    marginTop: 12,
  },
  input: {
    color: colors.gray[600],
    fontSize: 16,
    marginRight: 4,
    flex: 1,
    alignSelf: "stretch",
    background: "none",
    border: "none",
    paddingTop: 13,
    paddingBottom: 13,
  },
  eyeIcon: {
    width: 24,
    height: 24,
    objectFit: "fill",
    cursor: "pointer",
  },
  button: {
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: colors.orange[500],
    borderRadius: 8,
    border: "none",
    paddingTop: 18,
    paddingBottom: 18,
    marginBottom: 50,
    marginLeft: 20,
    marginRight: 20,
    textAlign: "left",
  },
  disabledButton: {
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: colors.gray[300],
    borderRadius: 8,
    border: "none",
    paddingTop: 18,
    paddingBottom: 18,
    marginBottom: 50,
    marginLeft: 20,
    marginRight: 20,
    textAlign: "left",
  },
};

export default PasswordChangeScreen;
