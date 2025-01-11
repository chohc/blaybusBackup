import colors from "../colors/colors";

export const theme = {
  pinkPage: {
    container: {
      display: "flex",
      flexDirection: "column",
      minHeight: 600,
      justifyContent: "flex-start",
      alignItems: "center",
      backgroundColor: colors.Primary.bg,
      padding: "3px 20px",
    },
    head: {
      display: "flex",
      width: 108,
      height: 45,
      alignItems: "center",
      justifyContent: "center",
    },
  },
  boxTheme: {
    boxContainer: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      padding: 20,
      borderRadius: 16,
      backgroundColor: "rgba(255, 255, 255, 0.7)",
      marginBottom: 16,
      color: colors.gray[900],
      boxShadow: "0px 2px 8px rgba(159, 32, 0, 0.16)",
    },
    rowContainer: {
      display: "flex",
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
    },
    barContainer: {
      display: "flex",
      width: "100%",
      height: 12,
      alignItems: "center",
      backgroundColor: colors.gray[300],
      borderRadius: 25,
      position: "relative",
    },
    colorbar: {
      display: "flex",
      height: 12,
      borderRadius: 25,
      position: "absolute",
      left: 0,
    },
  },
};
