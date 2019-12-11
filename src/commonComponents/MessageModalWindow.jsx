import React from "react";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import { messageSetter } from "../State.logic/ReduxActions";

const MessageModalWindow = ({ header, msg }) => {
  if (msg) {
    return (
      <Modal show onHide={messageSetter.close}>
        <Modal.Header closeButton>
          <Modal.Title>{header || "Сообщение"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{msg}</Modal.Body>
        <div className="modal-footer">
          <button className="btn btn-outline-secondary" onClick={messageSetter.close} type="button">
            Закрыть
          </button>
        </div>
      </Modal>
    );
  }
  return null;
};

export default connect(state => ({
  msg: state.error.msg,
  header: state.error.header,
}))(MessageModalWindow);

MessageModalWindow.propTypes = {
  msg: PropTypes.string,
  header: PropTypes.string,
};
