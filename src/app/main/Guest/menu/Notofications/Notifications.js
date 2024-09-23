import React from "react";
import Typography from "@mui/material/Typography";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { CardContent, Card } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import GuestNav from "../../GuestNav";
import Footer from "app/main/Home/Footer/Footer";

export default function Notifications() {
  return (
    <>
    <div>
    <GuestNav/>
    </div>
      <div className="mt-68 mx-auto space-y-14">
        <div>
          <Typography className="font-medium text-2xl">Notification</Typography>
        </div>

            <Typography className="font-medium text-xs">Today</Typography>
        
        <Card className="border-2 rounded-8 w-full h-auto">
          <CardContent>
            <div className="flex space-x-20 ">
              <img src="assets/images/logos/noti1.svg" />
              <div className="w-11/12">
                <div className="flex justify-between">
                  <div>
                    <div className="flex space-x-8">
                      <Typography className="font-500 text-base">
                        Gulzar Ali accepted your booking request
                      </Typography>
                      <Typography className="text-xs font-400 mt-4" style={{color:"#667085"}}>2 minutes ago</Typography>
                    </div>
                    <div className="flex">
                      <Typography className="text-base font-medium space-x-4">
                        <spam>See</spam>
                      <b
                          className="text-sm font-normal ml-4"
                          style={{ color: "#D22A8F" }}
                        >
                          booking details
                        </b>
                        </Typography>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <IconButton>
                  <MoreHorizOutlinedIcon></MoreHorizOutlinedIcon>
                </IconButton>
              </div>
            </div>
          </CardContent>
        </Card>
            <Typography className="font-medium text-xs">Yesterday</Typography>
        <Card className="border-2 rounded-8 w-full h-auto">
          <CardContent>
            <div className="flex space-x-20 ">
              <img src="assets/images/logos/noti2.svg" />
              <div className="w-11/12">
                <div className="flex justify-between">
                  <div>
                    <div className="flex space-x-8">
                      <Typography className="font-500 text-base">
                        Gulzar Ali rate you 4 star
                      </Typography>
                      <Typography className="text-xs font-400 mt-4" style={{color:"#667085"}}>3 days ago</Typography>
                    </div>
                      <Typography  className="text-basetext-600"
                          style={{ color: "#D22A8F" }}>
                         Rate your host now
                      </Typography>
                  </div>
                </div>
              </div>
              <div>
                <IconButton>
                  <MoreHorizOutlinedIcon></MoreHorizOutlinedIcon>
                </IconButton>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-2 rounded-8 w-full h-auto">
          <CardContent>
            <div className="flex space-x-20 ">
              <img src="assets/images/logos/noti2.svg" />
              <div className="w-11/12">
                <div className="flex justify-between">
                  <div>
                    <div className="flex space-x-8">
                      <Typography className="font-500 text-base">
                        Your account is verified
                      </Typography>
                      <Typography className="text-xs font-400 mt-4" style={{color:"#667085"}}>3 days ago</Typography>
                    </div>
                    <div>
                      <Typography className="text-basetext-600"
                          style={{ color: "#D22A8F" }}>
                        Start booking
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <IconButton>
                  <MoreHorizOutlinedIcon></MoreHorizOutlinedIcon>
                </IconButton>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-136">
      <Footer/>
      </div>
    </>
  );
}
