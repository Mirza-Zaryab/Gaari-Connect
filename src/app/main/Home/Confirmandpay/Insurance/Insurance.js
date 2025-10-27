import React from "react";
import {
  Button,
  Typography,
} from "@mui/material";
export default function Insurance() {
  return (
    <div>
      <hr />
      <div className="flex justify-between mt-20">
        <Typography
          className="font-medium text-lg"
          style={{ color: "#101828" }}
        >
          Life insurance
        </Typography>
        <Typography>
          <b className="font-medium text-lg" style={{ color: "#101828" }}>
            Rs 200
          </b>
          /per day
        </Typography>
      </div>
      <Typography className="text-sm" style={{ color: "#667085" }}>
        Hit the road confidiently with solid protection
      </Typography>
      <Typography className="text-xs font-medium" style={{ color: "#D22A8F" }}>
        Learn more about insurance
      </Typography>
      <Button
        variant="contained"
        className="rounded-4 text-white w-full mt-16 h-44"
        style={{ backgroundColor: "#D22A8F" }}
      >
        Yes i am taking insurance
      </Button>
      <Button
        variant="contained"
        className="rounded-4 text-white w-full mt-16 h-44"
        style={{
          backgroundColor: "#FFFFFF",
          color: "#D22A8F",
          border: "1px solid #000000",
        }}
      >
        No thanks, i will bear the damage
      </Button>
    </div>
  );
}
