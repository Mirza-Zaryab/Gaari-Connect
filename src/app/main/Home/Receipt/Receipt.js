import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Navbar from "../Navbar/Navbar";
import RecieptPaymentDetails from "../../Host/sharedComponents/RecieptPaymentDetails";
import Footer from "app/main/Home/Footer/Footer";

function Receipt() {
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
      <Navbar />
      <div className="flex flex-row justify-center">
        <Card
          style={{
            marginTop: "150px",
            width: "524px",
            height: "auto",
            border: "1px solid rgba(195, 203, 205, 0.42)",
          }}
        >
          <CardContent>
            <div className="flex flex-row justify-center ">
              <img width="48" src="assets/images/logos/popup.svg" alt="logo" />
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
      <div className="flex flex-row justify-center ">
        <Typography
          className="absolute bottom-0 text-16 font-normal pb-10"
          style={{ color: "#98A2B3" }}
        >
          © 2022 GariConnect. All rights reserved.
        </Typography>
      </div>
      <div className="mt-160">
        <Footer />
      </div>
    </div>
  );
}
export default Receipt;
