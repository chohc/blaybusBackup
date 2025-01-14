import React from "react";
import "../fonts/font.css";
import gif1 from "../images/home/gif1.gif";
import HomeTree from "../images/home/HomeTree.png";
import dart from "../images/exp/exp_dart.png";

const HomeScreen = () => {
  const styles = {
    scrollView: {
      background: "linear-gradient(180deg, #FFB09E, #FFECE7)",
      paddingTop: "19px",
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
      marginBottom: "12px",
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
    treeImage: {
      position: "absolute",
      zIndex: 1,
      width: "338px",
      height: "271px",
      marginLeft: "27px",
      marginRight: "30px",
      marginTop: "110px",
    },
    gifImage: {
      position: "relative",
      zIndex: 2,
      width: "255px",
      height: "297px",
      marginLeft: "80px",
    },
  };

  return (
    <div style={styles.scrollView}>
      <div style={styles.column}>
        <div style={styles.rowView}>
          <button style={styles.button} onClick={() => alert("Pressed!")}>
            F1 - I
          </button>
          <span style={{ color: "#212124", fontSize: "14px", fontWeight: "bold" }}>
            총 누적 경험치
          </span>
          <div style={{ flex: 1 }}></div>
          <span style={{ color: "#816043", fontSize: "14px", fontWeight: "bold" }}>
            12,657
          </span>
          <span style={{ color: "#868B94", fontSize: "14px", fontWeight: "bold" }}>
            /
          </span>
          <span style={{ color: "#868B94", fontSize: "14px", fontWeight: "bold" }}>
            13,500
          </span>
          <span style={{ color: "#868B94", fontSize: "14px", fontWeight: "bold" }}>
            do
          </span>
        </div>
        <div style={{ background: "#DCDEE3", borderRadius: "25px", height: "12px" }}>
          <div
            style={{
              background: "#816043",
              width: "85%",
              height: "100%",
              borderRadius: "25px",
            }}
          ></div>
        </div>
      </div>
      <div>
        <img src={HomeTree} alt="Tree Background" style={styles.treeImage} />
        <img src={gif1} alt="Animated character" style={styles.gifImage} />
      </div>
      <div className="absolute-column">
        <div className="row-view">
          <span className="text">최근 획득한 경험치</span>
          <span className="text2">자세히보기</span>
          <img src={dart} className="image" alt="Detail Icon" />
        </div>
        <div className="row-view2">
          <div className="view">
            <img src={dart} className="image2" alt="Icon" />
          </div>
          <div className="column">
            <div className="row-view3">
              <span className="text3">월특근</span>
              <div className="view2">
                <span className="text4">리더부여</span>
              </div>
            </div>
            <div className="row-view4">
              <div className="view3">
                <span className="text5">MAX 달성</span>
              </div>
              <div className="view4">
                <span className="text6">1월</span>
              </div>
            </div>
            <div className="row-view5">
              <span className="text7">2024.05.12</span>
              <img src={dart} className="image3" alt="Divider" />
              <span className="text8">5회</span>
            </div>
          </div>
          <span className="text9">100</span>
          <span className="text10">do</span>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
