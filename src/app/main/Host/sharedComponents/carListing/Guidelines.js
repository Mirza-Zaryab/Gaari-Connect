import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Card, Button, CardContent, CardActionArea } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { addGuidelines } from "../../ListStepper/store/guidelinesSice";

const Guidelines = () => {
  const dispatch = useDispatch();

  const _guidelines = useSelector(
    (state) => state.ListStepperReducer.guidelines
  );
  console.log(_guidelines);
  const features = useSelector(
    (state) => state.ListStepperReducer.guidelines.guidelines
  );
  const [flags, setFlags] = useState(features);

  const handleCardClick = (key, value, identity) => {
    setFlags({
      ...flags,
      [key]: { id: identity.toString(), availability: !value },
    });

    dispatch(
      addGuidelines({
        ...flags,
        [key]: { id: identity.toString(), availability: !value },
      })
    );
  };
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-10 mt-16 sm:ml-0 ml-80">
        <Card
          className="col-span-1 rounded-md shadow-sm"
          style={{
            maxWidth: "164px",
            maxHeight: "164px",
            border: "1px solid rgba(195, 203, 205, 0.42)",
            backgroundColor: flags.blueTooth.availability
              ? "#FDF4F9"
              : "#FFFFFF",
          }}
        >
          <CardActionArea
            onClick={() => {
              handleCardClick(
                Object.keys(features)[0],
                flags.blueTooth.availability,
                flags.blueTooth.id
              );
            }}
          >
            {flags.blueTooth.availability ? (
              <img
                className="mt-10 mr-10"
                style={{ float: "right" }}
                width="16"
                src="assets/images/logos/Checkbox.svg"
                alt="logo"
              />
            ) : null}

            <CardContent>
              <img
                className="mx-auto"
                style={{ marginTop: "35px" }}
                width="40%"
                src="assets/images/logos/fbluetooth.svg"
                alt="logo"
              />
              <Typography
                className="text-center mt-20"
                style={{
                  fontSize: "14px",
                  fontWeight: "500px",
                }}
              >
                Bluetooth
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          className="col-span-1 rounded-md shadow-sm"
          style={{
            maxWidth: "164px",
            maxHeight: "164px",
            border: "1px solid rgba(195, 203, 205, 0.42)",
            backgroundColor: flags.keylessEntry.availability
              ? "#FDF4F9"
              : "#FFFFFF",
          }}
        >
          <CardActionArea
            onClick={() => {
              handleCardClick(
                Object.keys(features)[1],
                flags.keylessEntry.availability,
                flags.keylessEntry.id
              );
            }}
          >
            {flags.keylessEntry.availability ? (
              <img
                className="mt-10 mr-10"
                style={{ float: "right" }}
                width="16"
                src="assets/images/logos/Checkbox.svg"
                alt="logo"
              />
            ) : null}
            <CardContent>
              <div>
                <img
                  className="mt-40 mx-auto"
                  width="40%"
                  src="assets/images/logos/keylessentry.svg"
                  alt="logo"
                />
                <Typography
                  className="text-center mt-20"
                  style={{ fontSize: "14px", fontWeight: "500px" }}
                >
                  Keyless entry
                </Typography>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          className="col-span-1 rounded-md shadow-sm"
          style={{
            maxWidth: "164px",
            maxHeight: "164px",
            border: "1px solid rgba(195, 203, 205, 0.42)",
            backgroundColor: flags.appleCar.availability
              ? "#FDF4F9"
              : "#FFFFFF",
          }}
        >
          <CardActionArea
            onClick={() => {
              handleCardClick(
                Object.keys(features)[2],
                flags.appleCar.availability,
                flags.appleCar.id
              );
            }}
          >
            {flags.appleCar.availability ? (
              <img
                className="mt-10 mr-10"
                style={{ float: "right" }}
                width="16"
                src="assets/images/logos/Checkbox.svg"
                alt="logo"
              />
            ) : null}

            <CardContent>
              <img
                className="mx-auto mt-48"
                width="30%"
                src="assets/images/logos/fapplecarplay.svg"
                alt="logo"
              />
              <Typography
                className="text-center mt-20"
                style={{ fontSize: "14px", fontWeight: "500px" }}
              >
                Apple Carplay
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          className="col-span-1 rounded-md shadow-sm"
          style={{
            maxWidth: "164px",
            maxHeight: "164px",
            border: "1px solid rgba(195, 203, 205, 0.42)",
            backgroundColor: flags.USB.availability ? "#FDF4F9" : "#FFFFFF",
          }}
        >
          <CardActionArea
            onClick={() => {
              handleCardClick(
                Object.keys(features)[3],
                flags.USB.availability,
                flags.USB.id
              );
            }}
          >
            {flags.USB.availability ? (
              <img
                className="mt-10 mr-10"
                style={{ float: "right" }}
                width="16"
                src="assets/images/logos/Checkbox.svg"
                alt="logo"
              />
            ) : null}

            <CardContent>
              <img
                className="mx-auto mt-48"
                width="70%"
                src="assets/images/logos/fusbcharge.svg"
                alt="logo"
              />
              <Typography
                className="text-center mt-20"
                style={{ fontSize: "14px", fontWeight: "500px" }}
              >
                USB charger
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          className="col-span-1 rounded-md shadow-sm"
          style={{
            maxWidth: "164px",
            maxHeight: "164px",
            border: "1px solid rgba(195, 203, 205, 0.42)",
            backgroundColor: flags.backupCamera.availability
              ? "#FDF4F9"
              : "#FFFFFF",
          }}
        >
          <CardActionArea
            onClick={() => {
              handleCardClick(
                Object.keys(features)[4],
                flags.backupCamera.availability,
                flags.backupCamera.id
              );
            }}
          >
            {flags.backupCamera.availability ? (
              <img
                className="mt-10 mr-10"
                style={{ float: "right" }}
                width="16"
                src="assets/images/logos/Checkbox.svg"
                alt="logo"
              />
            ) : null}
            <CardContent>
              <img
                className="mx-auto mt-40"
                width="20%"
                src="assets/images/logos/fbackupcamera.svg"
                alt="logo"
              />
              <Typography
                className="text-center mt-10"
                style={{ fontSize: "14px", fontWeight: "500px" }}
              >
                Backup camera
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          className="col-span-1 rounded-md shadow-sm"
          style={{
            maxWidth: "164px",
            maxHeight: "164px",
            border: "1px solid rgba(195, 203, 205, 0.42)",
            backgroundColor: flags.auxInput.availability
              ? "#FDF4F9"
              : "#FFFFFF",
          }}
        >
          <CardActionArea
            onClick={() => {
              handleCardClick(
                Object.keys(features)[5],
                flags.auxInput.availability,
                flags.auxInput.id
              );
            }}
          >
            {flags.auxInput.availability ? (
              <img
                className="mt-10 mr-10"
                style={{ float: "right" }}
                width="16"
                src="assets/images/logos/Checkbox.svg"
                alt="logo"
              />
            ) : null}
            <CardContent>
              <img
                className="mx-auto mt-40"
                width="40%"
                src="assets/images/logos/fauxinput.svg"
                alt="logo"
              />
              <Typography
                className="text-center mt-20"
                style={{ fontSize: "14px", fontWeight: "500px" }}
              >
                AUX input
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-4 md:grid-cols-6 mt-16 sm:ml-0 ml-80">
        <Card
          className="col-span-1 rounded-md shadow-sm"
          style={{
            maxWidth: "164px",
            maxHeight: "164px",
            border: "1px solid rgba(195, 203, 205, 0.42)",
            backgroundColor: flags.tollPass.availability
              ? "#FDF4F9"
              : "#FFFFFF",
          }}
        >
          <CardActionArea
            onClick={() => {
              handleCardClick(
                Object.keys(features)[6],
                flags.tollPass.availability,
                flags.tollPass.id
              );
            }}
          >
            {flags.tollPass.availability ? (
              <img
                className="mt-10 mr-10"
                style={{ float: "right" }}
                width="16"
                src="assets/images/logos/Checkbox.svg"
                alt="logo"
              />
            ) : null}
            <CardContent>
              <img
                className="mx-auto mt-44"
                width="40%"
                src="assets/images/logos/ftollpass.svg"
                alt="logo"
              />
              <Typography
                className="text-center mt-20"
                style={{ fontSize: "14px", fontWeight: "500px" }}
              >
                Toll pass
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          className="col-span-1 rounded-md shadow-sm"
          style={{
            maxWidth: "164px",
            maxHeight: "164px",
            border: "1px solid rgba(195, 203, 205, 0.42)",
            backgroundColor: flags.heatedSeat.availability
              ? "#FDF4F9"
              : "#FFFFFF",
          }}
        >
          <CardActionArea
            onClick={() => {
              handleCardClick(
                Object.keys(features)[7],
                flags.heatedSeat.availability,
                flags.heatedSeat.id
              );
            }}
          >
            {flags.heatedSeat.availability ? (
              <img
                className="mt-10 mr-10"
                style={{ float: "right" }}
                width="16"
                src="assets/images/logos/Checkbox.svg"
                alt="logo"
              />
            ) : null}
            <CardContent>
              <img
                className="mx-auto mt-44"
                width="35%"
                src="assets/images/logos/fheatedseat.svg"
                alt="logo"
              />
              <Typography
                className="text-center mt-20"
                style={{ fontSize: "14px", fontWeight: "500px" }}
              >
                Heated seats
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          className="col-span-1 rounded-md shadow-sm"
          style={{
            maxWidth: "164px",
            maxHeight: "164px",
            border: "1px solid rgba(195, 203, 205, 0.42)",
            backgroundColor: flags.sunRoof.availability ? "#FDF4F9" : "#FFFFFF",
          }}
        >
          <CardActionArea
            onClick={() => {
              handleCardClick(
                Object.keys(features)[8],
                flags.sunRoof.availability,
                flags.sunRoof.id
              );
            }}
          >
            {flags.sunRoof.availability ? (
              <img
                className="mt-10 mr-10"
                style={{ float: "right" }}
                width="16"
                src="assets/images/logos/Checkbox.svg"
                alt="logo"
              />
            ) : null}
            <CardContent>
              <img
                className="mx-auto mt-44"
                width="50%"
                src="assets/images/logos/fsunroof.svg"
                alt="logo"
              />
              <Typography
                className="text-center mt-20"
                style={{ fontSize: "14px", fontWeight: "500px" }}
              >
                Sunroof
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          className="col-span-1 rounded-md shadow-sm"
          style={{
            maxWidth: "164px",
            maxHeight: "164px",
            border: "1px solid rgba(195, 203, 205, 0.42)",
            backgroundColor: flags.wheelDriver.availability
              ? "#FDF4F9"
              : "#FFFFFF",
          }}
        >
          <CardActionArea
            onClick={() => {
              handleCardClick(
                Object.keys(features)[9],
                flags.wheelDriver.availability,
                flags.wheelDriver.id
              );
            }}
          >
            {flags.wheelDriver.availability ? (
              <img
                className="mt-10 mr-10"
                style={{ float: "right" }}
                width="16"
                src="assets/images/logos/Checkbox.svg"
                alt="logo"
              />
            ) : null}
            <CardContent>
              <img
                className="mx-auto mt-44"
                width="40%"
                src="assets/images/logos/fwheeldriver.svg"
                alt="logo"
              />
              <Typography
                className="text-center mt-20"
                style={{ fontSize: "14px", fontWeight: "500px" }}
              >
                All-Wheel drive
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          className="col-span-1 rounded-md shadow-sm"
          style={{
            maxWidth: "164px",
            maxHeight: "164px",
            border: "1px solid rgba(195, 203, 205, 0.42)",
            backgroundColor: flags.GPS.availability ? "#FDF4F9" : "#FFFFFF",
          }}
        >
          <CardActionArea
            onClick={() => {
              handleCardClick(
                Object.keys(features)[10],
                flags.GPS.availability,
                flags.GPS.id
              );
            }}
          >
            {flags.GPS.availability ? (
              <img
                className="mt-10 mr-10"
                style={{ float: "right" }}
                width="16"
                src="assets/images/logos/Checkbox.svg"
                alt="logo"
              />
            ) : null}
            <CardContent>
              <img
                className="mx-auto mt-44"
                width="40%"
                src="assets/images/logos/fgps.svg"
                alt="logo"
              />
              <Typography
                className="text-center mt-20"
                style={{ fontSize: "14px", fontWeight: "500px" }}
              >
                GPS
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          className="col-span-1 rounded-md shadow-sm"
          style={{
            maxWidth: "164px",
            maxHeight: "164px",
            border: "1px solid rgba(195, 203, 205, 0.42)",
            backgroundColor: flags.auxInput2.availability
              ? "#FDF4F9"
              : "#FFFFFF",
          }}
        >
          <CardActionArea
            onClick={() => {
              handleCardClick(
                Object.keys(features)[11],
                flags.auxInput2.availability,
                flags.auxInput2.id
              );
            }}
          >
            {flags.auxInput2.availability ? (
              <img
                className="mt-10 mr-10"
                style={{ float: "right" }}
                width="16"
                src="assets/images/logos/Checkbox.svg"
                alt="logo"
              />
            ) : null}
            <CardContent>
              <img
                className="mx-auto mt-40"
                width="40%"
                src="assets/images/logos/fauxinput.svg"
                alt="logo"
              />
              <Typography
                className="text-center mt-20"
                style={{ fontSize: "14px", fontWeight: "500px" }}
              >
                AUX input
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div>
        {/* <Button
          className="h-44 rounded-lg text-white mt-40"
          style={{ backgroundColor: "#D22A8F" }}
        >
          Save Info
        </Button> */}
      </div>
    </div>
  );
};

export default Guidelines;
