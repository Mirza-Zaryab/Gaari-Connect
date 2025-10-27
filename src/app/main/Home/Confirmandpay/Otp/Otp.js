import React, { useState } from "react";
import RecieptPaymentDetails from "../../../Host/sharedComponents/RecieptPaymentDetails";
import OtpInput from "react-otp-input";
import Dialog from "@mui/material/Dialog";
import { Button, Card, CardContent, Typography } from "@mui/material";

export default function OTP() {
  const [book, setBook] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [code, setCode] = useState("");

  const handleChange = (code) => setCode(code);
  const receiptClickOpen = () => {
    setBook(true);
  };

  const receiptClose = () => {
    setBook(false);
  };
  const [showdetailsstatus, setstatus] = useState(false);

  const showdetails = () => {
    setstatus(true);
  };
  const childToParent = (childdata) => {
    setstatus(childdata);
  };
  return (
    <div>
      {showdetailsstatus && (
        <RecieptPaymentDetails childToParent={childToParent} />
      )}
      <Button
        onClick={handleClickOpen}
        variant="contained"
        className="rounded-4 text-white w-full mt-16 h-44"
        style={{
          backgroundColor: "#D22A8F",
          color: "#FFFFFF",
        }}
      >
        Book car for Rs 8200
      </Button>
      <Dialog
        style={{ borderRadius: "12px", height: "auto" }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Card
          style={{
            width: "524px",
            height: "361px",
            border: "1px solid rgba(195, 203, 205, 0.42)",
          }}
        >
          <div style={{ marginTop: "21px", textAlign: "center" }}>
            <h1
              style={{ fontSize: "24px", fontWeight: "600", color: " #101828" }}
            >
              Verify
            </h1>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "400px",
                color: "#667085",
                marginTop: "10px",
              }}
            >
              Please enter 6 digit code send on your phone 034******59
            </p>
          </div>
          <div className="w-full mt-20 ">
            <hr />
          </div>
          <CardContent>
            <div className="flex justify-center space-x-10">
              <OtpInput
                value={code}
                onChange={handleChange}
                numInputs={4}
                separator={<span style={{ width: "8px" }}></span>}
                isInputNum={true}
                shouldAutoFocus={true}
                inputStyle={{
                  border: "1px solid #D0D5DD",
                  borderRadius: "8px",
                  width: "66px",
                  height: "66px",
                  fontSize: "12px",
                  color: "#000",
                  fontWeight: "500",
                  fontSize: "32px",
                }}
                focusStyle={{
                  border: "1px solid black",
                  outline: "none",
                }}
              />
            </div>
            <div className="sm:mt-28 mt-16">
              <Button
                onClick={receiptClickOpen}
                style={{
                  backgroundColor: "rgba(210, 42, 143, 1)",
                  height: "44px",
                  fontSize: "16px",
                }}
                className="w-full text-white rounded-lg"
              >
                Submit
              </Button>
            </div>
            <div className="sm:mt-20 mt-24">
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  textAlign: "center",
                  marginTop: "24px",
                }}
              >
                Didn't receive code?
                <b
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#D22A8F",
                    textAlign: "center",
                    marginTop: "24px",
                  }}
                >
                  Resend Code
                </b>
              </p>
            </div>
          </CardContent>
        </Card>
      </Dialog>
      <div>
        <Dialog
          onClose={receiptClose}
          style={{ borderRadius: "12px", height: "auto" }}
          open={book}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div className="flex flex-row justify-center">
            <Card
              style={{
                width: "524px",
                height: "auto",
                border: "1px solid rgba(195, 203, 205, 0.42)",
              }}
            >
              <CardContent>
                <div className="flex flex-row justify-center ">
                  <img
                    width="48"
                    src="assets/images/logos/popup.svg"
                    alt="logo"
                  />
                </div>
                <div>
                  <Typography
                    className="text-lg font-medium flex justify-center"
                    style={{ color: "#101828" }}
                  >
                    Thanks Danish for booking
                  </Typography>
                  <Typography
                    className="font-normal text-sm flex justify-center"
                    style={{ color: "#667085" }}
                  >
                    Your car is listed successfully, please wait for
                    <br /> approval, Thanks
                  </Typography>
                </div>
                <div className="sm:mt-28 mt-16">
                  <Button
                    onClick={showdetails}
                    style={{
                      backgroundColor: "rgba(210, 42, 143, 1)",
                      height: "44px",
                      fontSize: "16px",
                    }}
                    className="w-full text-white rounded-lg"
                  >
                    View receipt
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </Dialog>
      </div>
    </div>
  );
}
