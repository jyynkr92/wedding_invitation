import React from "react";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";

function SimpleDialog({ image, open, onClose }) {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <Image src={image} alt="wedding" onClick={handleClose} />
    </Dialog>
  );
}

const Image = styled.img`
  width: 100%;
`;

export default SimpleDialog;
