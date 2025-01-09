import React, { useState } from "react";
import "../App.css";
import Logo from "../images/Logo.png";
import colors from "../colors/colors";

const LoginScreen = () => {
  const [input1, setInput1] = useState(""); 
  const [input2, setInput2] = useState(""); 
  const [focusedInput, setFocusedInput] = useState(null); 

  const onChangeInput1 = (value) => setInput1(value);
  const onChangeInput2 = (value) => setInput2(value);

  const isButtonDisabled = !input1 || !input2;

  return (
    <div className="page" style={styles.container}>
      <img src={Logo} alt="Logo" style={styles.logo} />
      <input
        placeholder={"아이디"}
        value={input1}
        onChange={(event) => onChangeInput1(event.target.value)}
        onFocus={() => setFocusedInput("input1")}
        onBlur={() => setFocusedInput(null)}
        style={{
          ...styles.input,
          borderColor: focusedInput === "input1" ? "black" : colors.gray[400],
        }}
      />
      <input
        type="password"
        placeholder={"비밀번호"}
        value={input2}
        onChange={(event) => onChangeInput2(event.target.value)}
        onFocus={() => setFocusedInput("input2")}
        onBlur={() => setFocusedInput(null)}
        style={{
          ...styles.input,
          ...styles.passwordInput,
          borderColor: focusedInput === "input2" ? "black" : colors.gray[400],
        }}
      />
      <button
        style={{
          ...styles.button,
          backgroundColor: isButtonDisabled
            ? colors.gray[300]
            : colors.orange[500],
          cursor: isButtonDisabled ? "not-allowed" : "pointer",
        }}
        onClick={() => !isButtonDisabled && alert("로그인!")}
        disabled={isButtonDisabled}
      >
        <span
          style={{
            color: isButtonDisabled ? colors.gray[500] : "#FFFFFF", 
            fontSize: 18,
         
          }}
        >
          로그인
        </span>
      </button>
      <div style={styles.linksContainer}>
        <span style={styles.link}>아이디 찾기</span>
        <div style={styles.divider} />
        <span style={styles.link}>비밀번호 찾기</span>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    background: colors.gray[50],
    paddingTop: 204, 
    height: "100vh",
    justifyContent: "flex-start", 
    alignItems: "center",
  },
  logo: {
    height: 30,
    marginBottom: 44, 
  },
  input: {
    color: colors.gray[900],
    fontSize: 16,
    marginBottom: 16,
    width: "calc(100% - 40px)",
    maxWidth: 400,
    background: colors.gray[100],
    borderRadius: 8,
    border: "1px solid",
    padding: 18,
    outline: "none",
    transition: "border-color 0.3s", 
  },
  passwordInput: {
    marginBottom: 24,
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    border: "none",
    paddingTop: 18,
    paddingBottom: 18,
    marginBottom: 26,
    width: "calc(100% - 40px)",
    maxWidth: 400,
    textAlign: "center",
  },
  linksContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "calc(100% - 130px)",
    maxWidth: 270,
    marginBottom: 318,
  },
  link: {
    color: colors.gray[900],
    fontSize: 14,
    cursor: "pointer",
  },
  divider: {
    width: 1,
    height: 9,
    backgroundColor: colors.gray[400],
  },
};

export default LoginScreen;
