import colors from "../colors/colors";
import Exp from "../images/notification/exp.png";
import Notice from "../images/notification/notice.png";

export const NotificationBox = ({ type, text, date }) => {
  return (
    <div style={styles.container}>
      <img
        src={type === "exp" ? Exp : Notice}
        style={{ width: 40, height: 40, marginRight: 12 }}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span className="body-2-r">
          {type === "exp" ? "내 경험치 알림" : "게시판 알림"}
        </span>
        <span
          className="subtitle-1-regular"
          style={{ color: colors.gray[900], margin: "4px 0px" }}
        >
          {text}
        </span>
        <span className="label-1-r">{date}</span>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    width: "100%",
    alignItems: "flex-start",
    padding: "16px 0px 12px 0px",
    borderBottom: `1px solid ${colors.gray[100]}`,
  },
};
