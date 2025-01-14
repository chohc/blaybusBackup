import colors from "../colors/colors";

export const NoticeChip = () => {
  return (
    <div style={styles.container}>
      <span className="label-1-r" style={{ color: colors.gray[600] }}>
        공지사항
      </span>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "3px 8px",
    borderRadius: 8,
    backgroundColor: colors.gray[200],
  },
};
