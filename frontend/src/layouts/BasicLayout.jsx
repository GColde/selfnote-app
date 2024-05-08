import PropTypes from "prop-types";
import NavigationBar from "../components/NavigationBar/NavigationBar";

const BasicLayout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <div>{children}</div>
    </>
  );
};

BasicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BasicLayout;
