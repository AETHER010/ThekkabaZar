import React, { useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Bank = ({ open, onClose }) => {
  const { data, status, error } = useSelector((state) => state.price);

  return (
    <div className="flex flex-row">
      <Dialog
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
        fullWidth
        maxWidth="md"
        PaperProps={{
          style: {
            maxHeight: "80vh",
            marginTop: "8vh",
            backgroundColor: "#498bf5",
          },
        }}
      >
        <DialogTitle>Payment Details</DialogTitle>
        {data?.banks?.map((items, index) => (
          <DialogContent key={index}>
            <p className="text-white text-2xl font-bold">
              Bank Name: {items.bank_name}
            </p>
            <p>Account Holder Name: {items.account_name}</p>
            <p>Account Number: {items.account_number}</p>
            <p> Branch: {items.branch}</p>
            <img src={items.qr} alt="qr" />
          </DialogContent>
        ))}
        <Button onClick={onClose} variant="text" style={{ color: "white" }}>
          Close
        </Button>
      </Dialog>
    </div>
  );
};

export default Bank;
