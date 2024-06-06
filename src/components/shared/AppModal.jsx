import { Dialog } from "primereact/dialog";
import React from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";

AppModal.propTypes = {
  title: PropTypes.string,
  isVisible: PropTypes.bool,
  onClose: PropTypes.func,
  children: React.ReactNode,
};

function AppModal({ title, isVisible, onClose, children }) {
  useEffect(() => {
    console.log(children);
  }, [children]);
  return (
    <Dialog
      header={title}
      visible={isVisible}
      style={{ width: "50vw" }}
      onHide={onClose}
    >
      <span>Dialog</span>
      {children}
    </Dialog>
  );
}

export default AppModal;
