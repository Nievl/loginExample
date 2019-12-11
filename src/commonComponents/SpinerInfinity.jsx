import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const SpinerInf = ({ loading }) => {
  if (loading) {
    return (
      <>
        <div className="fade_spiner" />
        <div className="spiner spiner_big">
          <div>
            <div className="lds-ring">
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>
      </>
    );
  }
  return null;
};

export default connect(state => ({ loading: state.error.loading }))(SpinerInf);

SpinerInf.propTypes = { loading: PropTypes.bool };
