import React, { useState, useEffect, useRef } from "react";
import "../fonts/font.css";
import colors from "../colors/colors";
import { theme } from "../themes/theme";
import Help from "../icons/help.svg";
import PressableButton from "../components/PressableButton";
import GradeChip from "../components/GradeChip";
import GradeTableF from "../images/report/gradetable_f.png";
import GradeTableB from "../images/report/gradetable_b.png";
import GradeTableG from "../images/report/gradetable_g.png";

const ReportScreen = () => {
  const [tableVisible, setTableVisible] = useState(false);
  const tableRef = useRef(null);

  useEffect(() => {
    // table 영역 외부 클릭 시 tableVisible을 false로 설정
    const handleClickOutside = (event) => {
      if (tableRef.current && !tableRef.current.contains(event.target)) {
        setTableVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const ColorBar = ({ percent }) => {
    return (
      <div style={{ display: "flex", width: "100%" }}>
        <div
          style={{
            width: percent[0],
            height: 12,
            backgroundColor: colors.orange[900],
            borderTopLeftRadius: 25,
            borderBottomLeftRadius: 25,
          }}
        />
        <div
          style={{
            width: percent[1],
            height: 12,
            backgroundColor: colors.orange[600],
          }}
        />
        <div
          style={{
            width: percent[2],
            height: 12,
            backgroundColor: colors.orange[400],
          }}
        />
        <div
          style={{
            width: percent[3],
            height: 12,
            backgroundColor: colors.orange[200],
            borderTopRightRadius: 25,
            borderBottomRightRadius: 25,
          }}
        />
      </div>
    );
  };

  const LabelEx = ({ index, percent }) => {
    return (
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            width: 10,
            height: 10,
            backgroundColor: [
              colors.orange[900],
              colors.orange[600],
              colors.orange[400],
              colors.orange[200],
            ][index],
            borderRadius: 30,
            marginRight: 8,
            marginTop: 3,
          }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              ...styles.subText,
              lineHeight: 1.4,
              marginBottom: 4,
            }}
          >
            {["상반기", "하반기", "직무별", "리더부여"][index]}
            <br />
            {["인사평가", "인사평가", "퀘스트", "퀘스트"][index]}
          </span>
          <span className="subtitle-2-bold">
            {percent}
            <span style={styles.percent}>%</span>
          </span>
        </div>
      </div>
    );
  };

  const LabelLevel = ({ fullGrade, index }) => {
    const grade = fullGrade.slice(0, 1);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span className="label-1-b" style={{ marginBottom: 4 }}>
          {grade === "F"
            ? ["F1", "F2", "F3", "F4", "F5"][index]
            : grade === "B"
            ? ["B1", "B2", "B3", "B4", "B5", "B6"][index]
            : ["G1", "G2", "G3", "G4", "G5", "G6"][index]}
        </span>
        <span style={styles.subText}>
          {grade === "F"
            ? ["0", "27,000", "63,000", "108,000", "162,000"][index]
            : grade === "B"
            ? ["0", "24,000", "52,000", "78,000", "117,000", "169,000"][index]
            : ["0", "24,000", "52,000", "78,000", "117,000", "169,000"][index]}
        </span>
      </div>
    );
  };

  return (
    <div className="page" style={theme.pinkPage.container}>
      <div style={{ ...theme.pinkPage.head, marginBottom: 20 }}>
        <span className="title-3-bold">경험치 현황</span>
      </div>
      {/* 총 누적 경험치 */}
      <div style={theme.boxTheme.boxContainer}>
        <span className="Body-2-b" style={{ marginBottom: 4 }}>
          총 누적 경험치
        </span>
        <span style={styles.subText}>
          올해+작년 획득 총 경험치 / 다음 레벨 요구 경험치
        </span>
        <div
          style={{
            ...theme.boxTheme.rowContainer,
            marginTop: 8,
            marginBottom: 12,
          }}
        >
          <div style={styles.subContainer}>
            <span className="title-3-bold">85</span>
            <span style={styles.percent}>%</span>
          </div>
          <div style={styles.subContainer}>
            <span className="Body-2-b" style={{ color: colors.Level.Bronze }}>
              12,657
            </span>
            <pre style={styles.grayDo}> / 13,500do</pre>
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
            <pre style={styles.subText}> 남았어요!</pre>
          </div>
          <span className="label-1-r">F1 - II</span>
        </div>
      </div>
      {/* 올해 획득한 경험치 */}
      <div style={theme.boxTheme.boxContainer}>
        <span className="Body-2-b" style={{ marginBottom: 4 }}>
          올해 획득한 경험치
        </span>
        <span style={styles.subText}>
          올해 획득한 경험치 / 올해 획득 가능한 경험치
        </span>
        <div
          style={{
            ...theme.boxTheme.rowContainer,
            marginTop: 8,
          }}
        >
          <div style={styles.subContainer}>
            <span className="title-3-bold">85</span>
            <span style={styles.percent}>%</span>
          </div>
          <div style={styles.subContainer}>
            <span style={styles.orangeDo}>7,657</span>
            <pre style={styles.grayDo}> / 9,000do</pre>
          </div>
        </div>
        <div style={{ ...theme.boxTheme.barContainer, margin: "12px 0px" }}>
          <div style={{ ...theme.boxTheme.colorbar, width: "100%" }}>
            <ColorBar percent={["17%", "33%", "29%", "6%"]} />
          </div>
        </div>
        <div
          style={{
            ...styles.subContainer,
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          {["17%", "33%", "29%", "6%"].map((percent, index) => (
            <LabelEx percent={parseFloat(percent)} index={index} />
          ))}
        </div>
      </div>
      {/* 올해 전사 프로젝트 경험치 */}
      <div style={theme.boxTheme.boxContainer}>
        <div style={theme.boxTheme.rowContainer}>
          <span className="Body-2-b" style={{ marginBottom: 4 }}>
            올해 전사 프로젝트 경험치
          </span>
          <span style={styles.orangeDo}>
            0<span style={styles.grayDo}>do</span>
          </span>
        </div>
        <span style={styles.subText}>전사프로젝트 경험치에 대한 설명</span>
      </div>
      {/* 작년까지 획득한 경험치 */}
      <div style={theme.boxTheme.boxContainer}>
        <span className="Body-2-b" style={{ marginBottom: 4 }}>
          작년까지 획득한 경험치
        </span>
        <span style={styles.subText}>
          작년까지 획득한 경험치 / 다음 레벨 요구 경험치
        </span>
        <div
          style={{
            ...theme.boxTheme.rowContainer,
            marginTop: 8,
            marginBottom: 12,
          }}
        >
          <div style={styles.subContainer}>
            <span className="title-3-bold">37</span>
            <span style={styles.percent}>%</span>
          </div>
          <div style={styles.subContainer}>
            <span style={styles.orangeDo}>5,000</span>
            <pre style={styles.grayDo}> / 13,500do</pre>
          </div>
        </div>
        <div style={theme.boxTheme.barContainer}>
          <div
            style={{
              ...theme.boxTheme.colorbar,
              width: "37%",
              backgroundColor: colors.orange[500],
            }}
          />
        </div>
      </div>
      <div style={{ ...theme.boxTheme.boxContainer, marginBottom: 29 }}>
        <div style={styles.subContainer}>
          <span className="Body-2-b">내 레벨</span>
          <div
            ref={tableRef}
            style={{
              display: "flex",
              position: "relative",
            }}
          >
            <PressableButton
              onClick={() => setTableVisible(!tableVisible)}
              style={{ display: "flex", marginLeft: 8 }}
              pressedStyle={{ opacity: 0.5 }}
            >
              <img src={Help} alt="icon" style={{ width: 20, height: 20 }} />
            </PressableButton>
            {tableVisible && (
              <img
                src={GradeTableF}
                alt="table"
                style={{
                  width: 220,
                  position: "absolute",
                  zIndex: 11,
                  bottom: 14,
                  left: -18,
                }}
              />
            )}
          </div>
        </div>
        <div
          style={{
            ...theme.boxTheme.rowContainer,
            height: 26,
            marginTop: 16,
            marginBottom: 8,
          }}
        >
          <div style={{ ...theme.boxTheme.barContainer, height: 8 }}>
            <div
              style={{
                ...theme.boxTheme.colorbar,
                width: "20%",
                backgroundColor: colors.Level.Bronze,
                height: 8,
              }}
            />
            <div
              style={{ position: "absolute", zIndex: 10, left: `${20 - 10}%` }}
            >
              <GradeChip text={"F1 - I"} color={colors.Level.Bronze} />
            </div>
          </div>
        </div>
        <div
          style={{
            ...styles.subContainer,
            width: "100%",
            justifyContent: "space-between",
            padding: "0px 0px 0px 6px",
          }}
        >
          {/* {(grade.startsWith("F") ? [0, 1, 2, 3, 4] : [0, 1, 2, 3, 4, 5]).map(
            (n) => (
              <LabelLevel fullGrade="F1-I" index={n} />
            )
          )} */}
          {[0, 1, 2, 3, 4].map((n) => (
            <LabelLevel fullGrade="F1-I" index={n} />
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  subContainer: { display: "flex", alignItems: "center" },
  subText: {
    fontFamily: "Pretendard",
    fontWeight: 400,
    fontSize: 12,
    color: colors.gray[600],
  },
  percent: {
    fontFamily: "Pretendard",
    fontWeight: 700,
    fontSize: 12,
    color: colors.gray[600],
  },
  orangeDo: {
    fontFamily: "Pretendard",
    fontWeight: 700,
    fontSize: 14,
    color: colors.orange[500],
  },
  grayDo: {
    fontFamily: "Pretendard",
    fontWeight: 700,
    fontSize: 14,
    color: colors.gray[600],
  },
};

export default ReportScreen;
