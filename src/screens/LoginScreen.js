import React, { useState } from "react";
import "../App.css";
import Logo from "../images/Logo.png"; 

const LoginScreen = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const onChangeInput1 = (value) => setInput1(value);
  const onChangeInput2 = (value) => setInput2(value);

  return (
    <div className="page">
      <img
         src={Logo}
        alt="Logo"
        style={styles.logo}
      />
      <input
        placeholder={"아이디"}
        value={input1}
        onChange={(event) => onChangeInput1(event.target.value)}
        style={styles.input}
      />
      <input
        type="password"
        placeholder={"비밀번호"}
        value={input2}
        onChange={(event) => onChangeInput2(event.target.value)}
        style={{ ...styles.input, ...styles.passwordInput }}
      />
      <button style={styles.button} onClick={() => alert("Pressed!")}>
        <span style={styles.buttonText}>{"로그인"}</span>
      </button>
      <div style={styles.linksContainer}>
        <span style={styles.link}>{"아이디 찾기"}</span>
        <div style={styles.divider} />
        <span style={styles.link}>{"비밀번호 찾기"}</span>

      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    background: "#FFFFFF",
    paddingTop: 19,
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 30,
    marginBottom: 44,
  },
  input: {
    color: "#868B94",
    fontSize: 16,
    marginBottom: 16,
    width: "calc(100% - 40px)",
    maxWidth: 400,
    background: "none",
    borderRadius: 8,
    border: "1px solid #D1D3D8",
    padding: 18,
  },
  passwordInput: {
    marginBottom: 24,
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#DCDEE3",
    borderRadius: 8,
    border: "none",
    paddingTop: 18,
    paddingBottom: 18,
    marginBottom: 26,
    width: "calc(100% - 40px)",
    maxWidth: 400,
    textAlign: "center",
  },
  buttonText: {
    color: "#ADB1BA",
    fontSize: 18,
    fontWeight: "bold",
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
    color: "#393A40",
    fontSize: 14,
    cursor: "pointer",
  },
  divider: {
    width: 1,
    height: 9,
    backgroundColor: "#393A40",
  },
  signupLink: {
    color: "#FF5C35",
    fontSize: 14,
    cursor: "pointer",
  },
};

export default LoginScreen;
