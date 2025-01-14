import React from "react";
import PropTypes from "prop-types";
import arrowback from "../../images/arrow_back.png";
import colors from "../../colors/colors";

const Header2 = ({ title, onBack }) => {
  return (
    <div style={styles.headerContainer}>
      <img
        src={arrowback}
        style={styles.arrowback}
        alt="Back"
        onClick={onBack}
      />
      <span style={styles.headerText}>{title}</span>
    </div>
  );
};

Header2.propTypes = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func,
};

Header2.defaultProps = {
  onBack: () => {},
};

const styles = {
  headerContainer: {
    display: "flex",
    alignItems: "center",
    padding: "16px 20px",
    backgroundColor: "#FFFFFF",
    borderBottom: `1px solid ${colors.gray[300]}`,
  },
  arrowback: {
    width: 24,
    height: 24,
    cursor: "pointer",
  },
  headerText: {
    marginLeft: 16,
    fontSize: 18,
    fontWeight: "bold",
    color: colors.gray[900],
    flex: 1,
  },
};

export default Header2;
